/**
 * Group by function
 * @param {Array} list - an array of items to operate on
 * @param {Function} keyGetter - a function to get the key to group by
 * @returns {Map} - a map with grouped elements
 */
export function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  })
  return map;
}

/**
 * Check if an object is empty
 * @param obj Object
 * @returns boolean
 */
export function isEmpty(obj) {
  return obj === null || obj === undefined || obj === '';
}

/**
 * Check if an object is null or undefined or empty
 * @param value Object
 * @returns boolean
 */
export function isNullOrUndefined(value) {
  return !value || value === null || value === undefined || value === ''
    ? false
    : true;
}
