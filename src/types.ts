/**
 * @typedef {Object} QueryValue
 * @property {string} name - The name of the query value
 * @property {ResolveableQueryValue} value - The value of the query
 */
export interface QueryValue {
  name: string;
  value: ResolveableQueryValue;
}

/**
 * The type of values that can be resolved
 * @typedef {(number|string|boolean)} ResolveableQueryValue
 */
export type ResolveableQueryValue = number | string | boolean;

export type EncodingTableKeys = keyof EncodingTable;
