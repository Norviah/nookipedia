import fetch from 'node-fetch';
import { Endpoint } from './endpoint';

import * as api from './types/api';
import * as endpoint from './types/endpoints';

/**
 * A Typescript wrapper for Nookipedia's API.
 */
class Nookipedia {
  /**
   * Your API key, available at:
   * https://nookipedia.com/api/.
   */
  public key: string;

  /**
   * The endpoint for villagers.
   */
  public villagers: Endpoint<endpoint.Villager>;

  /**
   * The endpoint for fossils.
   */
  public fossils: Endpoint<endpoint.Fossil>;

  /**
   * The endpoint for critters,
   * note that this endpoint is in beta and that
   * the 'list' method isn't supported for now.
   */
  public critters: Endpoint<endpoint.Critter>;

  /**
   * The base url for Nookiepdia's API.
   */
  private url: string = 'https://nookipedia.com/api';

  /**
   * Initializes a new Nookipedia instance.
   * @param key Your API key.
   */
  constructor(key: string) {
    this.key = key;
    this.villagers = new Endpoint('villager', this.key);
    this.fossils = new Endpoint('fossil', this.key);
    this.critters = new Endpoint('critter', this.key);
  }

  /**
   * Returns an object representing the events for the
   * current date, or, the given date if one is given.
   * @param  date The date to get events for, in strotime format.
   * @return      Events that occur at the given date.
   */
  async today(date?: string): Promise<endpoint.Today> {
    // Call the API for the events for the given date.
    const response: endpoint.Today = await fetch(`${this.url}/today/${date ?? ''}/`, { headers: { 'X-API-Key': this.key } }).then((r) => r.json());

    return response;
  }

  /**
   * Returns an array representing all entries for this category.
   * @param  category The category to look for.
   * @return          An array containing entries for the given category.
   */
  async category(category: string): Promise<api.APIResponse<string[]>> {
    // Call the API for the given category, credit to Makupi for this,
    // https://github.com/makupi/async-nookipedia/blob/637858ef4a8000d380f04d9f0c924e7a03533626/nookipedia/api/api.py#L135.
    const call: api.Category = await fetch(`https://nookipedia.com/w/api.php?action=query&list=categorymembers&cmlimit=max&format=json&cmtitle=Category:${category}`, {
      headers: { 'X-API-Key': this.key },
    }).then((r) => r.json());

    // Initialize a new response to return.
    const response: api.APIResponse<string[]> = { valid: !call.error, error: null, data: null };

    // Check if the call had encountered an error, which
    // means that an empty string was given for the category.
    if (call?.error) {
      response.error = call.error.info;
    }

    // If an error hadn't occurred, initialize an array
    // that represents the title for each entry in the category.
    else {
      response.data = call.query.categorymembers.map((entry) => entry.title);
    }

    return response;
  }
}

export { Nookipedia };
