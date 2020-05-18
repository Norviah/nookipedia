import fetch from 'node-fetch';
import moment from 'moment';
import { Cache } from './cache';
import { expire } from './util';

import * as api from './types/api';
import * as endpoint from './types/endpoints';

class Endpoint<Endpoint extends endpoint.Endpoints> {
  /**
   * The name of this endpoint.
   */
  public name: endpoint.Names;

  /**
   * The API key.
   */
  public key: string;

  /**
   * The base url for Nookiepdia's API.
   */
  private url: string = 'https://nookipedia.com/api';

  /**
   * Holds a reference to cached data.
   */
  private cache: Cache<Endpoint> = new Cache();

  /**
   * Initializes a new Endpoint instance.
   * @param name The name of the endpoint.
   * @param key  The API key.
   */
  constructor(name: endpoint.Names, key: string) {
    this.name = name;
    this.key = key;
  }

  /**
   * Directly calls the API for the given name, and returns the result.
   * @param  name The name to retrieve from the API.
   * @return      The response from the API.
   */
  private async call<Type>(name: string): Promise<api.APIResponse<Type>> {
    // Call the API for an entry with the given name.
    const response = await fetch(`${this.url}/${this.name}/${name}/`, { headers: { 'X-API-Key': this.key } }).then((r) => r.json());

    // If an error occurs while calling, the response will have
    // an 'error' property, representing why the error has occurred. So
    // we simply check if the 'error' property exists.
    const valid = !response.hasOwnProperty('error');

    // If an error hadn't occurred, the response will instead have
    // properties about the given entry, with the format looking like
    // the generic class' type (which extends off of the Endpoints type).
    const data = valid ? (response as Type) : null;

    // Grab the error if an error had occurred.
    const error = !valid ? response.error : null;

    return { valid, error, data };
  }

  /**
   * Returns an object containing every entry in this endpoint.
   * @return An object containing every entry from the API of this endpoint.
   */
  async list(): Promise<api.APIResponse<api.Entry[]>> {
    //
    const response = await this.call<any>('');

    // If an error hadn't occurred, which means that we're on
    // the critter endpoint, the response will be an array with each element containing
    // information about each entry on this endpoint, with the format as:
    //
    //   {
    //     endpoint_key: string,             // => The entry's key, essentially the name of this entry.
    //     endpoint_url: string,             // => The URL to this entries Nookiepdia page.
    //     endpoint_api_request_url: string, // => The request URL to access information about this entry from Nookiepdia's API.
    //   }
    //
    // with 'endpoint' as the name of this endpoint, so, for example, if the endpoint
    // is 'villager', the keys will look like: 'villager_key', 'villager_url', and 'villager_api_request_url'.
    // We iterate through the array and simplify the name for each key from:
    //
    // endpoint_key to key
    // endpoint_url to url
    // endpoint_api_request_url to api
    if (response.data) {
      const array: api.Entry[] = [];

      // Simplify the keys for each entry and
      // push it into the array.
      response.data.map((entry: any) => array.push({ name: entry[`${this.name}_key`], url: entry[`${this.name}_url`], api: entry[`${this.name}_api_request_url`] }));

      // Set the array to the response object.
      response.data = array;
    }

    return response as api.APIResponse<api.Entry[]>;
  }

  /**
   * Gets the given name from the API, returning cached data if
   * the entry is cached. The name must be a non-blank string, as that
   * will instead return a lsit for all entries for this endpoint,
   * but the 'list' method is used for this purpose.
   * @param  name           The name of the entry to get.
   * @param  options        Optional options to use.
   * @param  options.cache  Determines if we should return cached data if the entry is cached.
   * @return                The response for the given entry.
   */
  async get(name: string, options: api.Options = { cache: true }): Promise<api.APIResponse<Endpoint>> {
    if (!name.length) {
      throw new Error(`Error: Get method for the Endpoint '${this.name}' must be given a non blank string.`);
    }

    // Try to check if the given entry exists in
    // the cache before calling the API. The 'find' method employs
    // a string similarity algorithm as the keys are the name of villagers,
    // so we don't have to worry about things like accents.
    const cache = this.cache.find(name);

    // Initialize a new Response object for the result.
    let response: api.APIResponse<Endpoint> = { valid: !!cache, error: null, data: cache };

    // We first check if we don't have the given entry cached, next, we check if the 'cache'
    // parameter is false, meaning that the user wants the method to only returned data
    // straight from the API. If both of those flags are false, it represents that we do
    // have valid cached data, finally, we check if the cached data has expired.
    if (!response.data || !options.cache || expire(response.data)) {
      // Call the API for an entry with the given name.
      response = await this.call<Endpoint>(name);

      if (response.data) {
        // If the given response doens't have an expiration property,
        // which is only used for the 'critter' endpoint, we set the expiration date to 6 hours from now.
        if (!response.data.hasOwnProperty('api-cache-expire')) {
          response.data['api-cache-expire'] = moment().add('6', 'hours').format('YYYY-DD-MM HH:MM:SS');
        }

        // Cache the response for later requests.
        this.cache.set(response.data.name, response.data as Endpoint);
      }
    }

    return response;
  }
}

export { Endpoint };
