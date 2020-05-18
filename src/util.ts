import moment from 'moment';
import * as endpoint from './types/endpoints';

/**
 * Checks to see if the cached data for the given item has expired.
 * @param  item The item to check.
 * @return      Represents if the given item has expired information.
 */
const expire = (item: endpoint.Endpoints): boolean => {
  // Initialize a new moment representing when the information will expire.
  const date = moment(item['api-cache-expire']);

  // Initialize a new moment instance representing the current date.
  const now = moment();

  return now.isAfter(date);
};

export { expire };
