import { EncodeQueryString } from "./literalEncoder";
import { QueryValue } from "./types";
/**
 * Serializes a list of query values into a query string
 * @template T
 * @param {T} nameValues - The list of query values to be serialized
 * @returns {EncodeQueryString<T>} The serialized query string
 */
export declare function serializeQueryNameValues<T extends QueryValue[]>(nameValues: T): EncodeQueryString<T>;
/**
 * Serializes a single query value into a query string segment
 * @template T
 * @param {T} nameValue - The query value to be serialized
 * @returns {string} The serialized query string segment
 */
export declare function serializeQueryNameValue<T extends QueryValue>(nameValue: T): string;
