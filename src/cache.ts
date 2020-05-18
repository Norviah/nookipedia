import { search } from 'fast-fuzzy';

/**
 * This is a simple class that extends off of the Map
 * class, it uses a string similarity algorithm
 * to try and find an object, rather than just using
 * the exact given string to retrieve.
 */
class Cache<Type> extends Map<string, Type> {
  /**
   * Initializes a new Cache instance.
   */
  constructor() {
    super();
  }

  /**
   * Searches through the Map's data and executes a
   * string similarity method to try and find an entry.
   * @param  name The name of the entry to find.
   * @return      An array of possible matches.
   */
  public matches(name: string): string[] {
    return search(name, this.keys(), { useSellers: false });
  }

  /**
   * Determines if the given name exists within this map.
   * @param  name The string to look for.
   * @return      Represents if the given string has an entry in this map.
   */
  public has(name: string): boolean {
    return this.matches(name).length > 0;
  }

  /**
   * Tries to find the given name in the map and returns
   * its entry as the generic type, if an entry can't be found null is returned.
   * @param  name The entry to look for.
   * @return      The entry for the given name if it exists, otherwise, null.
   */
  public find(name: string): Type | null {
    return super.get(this.matches(name)[0]) ?? null;
  }
}

export { Cache };
