import { EncodeQueryString } from "./literalEncoder";
import { QueryValue } from "./types";

/**
 * Serializes a list of query values into a query string
 * @template T
 * @param {T} nameValues - The list of query values to be serialized
 * @returns {EncodeQueryString<T>} The serialized query string
 */
export function serializeQueryNameValues<T extends QueryValue[]>(
  nameValues: T
) {
  const segments: string[] = [];
  for (const nameValue of nameValues)
    segments.push(serializeQueryNameValue(nameValue));
  return segments.join("&") as EncodeQueryString<T>;
}

/**
 * Serializes a single query value into a query string segment
 * @template T
 * @param {T} nameValue - The query value to be serialized
 * @returns {string} The serialized query string segment
 */
export function serializeQueryNameValue<T extends QueryValue>(nameValue: T) {
  const isExpectedType =
    typeof nameValue.value === "string" ||
    typeof nameValue.value === "number" ||
    typeof nameValue.value === "boolean";
  if (!isExpectedType)
    throw new TypeError(
      `Expected nameValue.value to be of type ResolveableQueryValue, got ${typeof nameValue.value}`
    );
  return `${encodeURIComponent(nameValue.name)}=${encodeURIComponent(
    nameValue.value
  )}`;
}
