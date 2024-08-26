/** 
 * Converts cents from integer to float
 * @param amount number
 * @returns number
 */
export function amountFromCents(amount) {
  return amount / 100;
}

/**
 * Converts float to cents
 * @param amount number
 * @returns number
 */
export function amountToCents(amount) {
  return parseInt((amount * 100).toFixed(0));
}
