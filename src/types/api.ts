/**
 * Options to use when calling the API.
 */
type Options = {
  /**
   * Determines if we should check the cached
   * database before requesting the API.
   */
  cache: boolean;
};

/**
 * Represents how this wrapper will format
 * information about an entry on an endpoint.
 */
type Entry = {
  /**
   * The name of this entry.
   */
  name: string;

  /**
   * The URL to this entry on Nookipedia's site.
   */
  url: string;

  /**
   * The request URL to access information about this entry from Nookipedia's API.
   */
  api: string;
};

/**
 * Represents what this wrapper will respond with
 * when calling the API for an entry on an endpoint.
 */
type APIResponse<Type> = {
  /**
   * Represents that the call was successful
   * and that the `data` property has a value.
   */
  valid: boolean;

  /**
   * If the call wasn't valid, this property
   * represents the error that occurred.
   */
  error: string | null;

  /**
   * Represents the response from the API
   * if the call was successful, if it wasn't this
   * property evaluates to null.
   */
  data: Type | null;
};

/**
 * Represents what the API responds with
 * when calling it for a request for a category.
 */
type Category = {
  batchcomplete: string;
  limits: {
    categorymembers: number;
  };
  query: {
    categorymembers: { pageid: number; ns: number; title: string }[];
  };
  error?: {
    code: string;
    info: string;
    '*': string;
  };
};

export { Options, Entry, APIResponse, Category };
