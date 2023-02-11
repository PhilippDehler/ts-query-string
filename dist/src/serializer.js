"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryNameValue = exports.serializeQueryNameValues = void 0;
/**
 * Serializes a list of query values into a query string
 * @template T
 * @param {T} nameValues - The list of query values to be serialized
 * @returns {EncodeQueryString<T>} The serialized query string
 */
function serializeQueryNameValues(nameValues) {
    const segments = [];
    for (const nameValue of nameValues)
        segments.push(serializeQueryNameValue(nameValue));
    return segments.join("&");
}
exports.serializeQueryNameValues = serializeQueryNameValues;
/**
 * Serializes a single query value into a query string segment
 * @template T
 * @param {T} nameValue - The query value to be serialized
 * @returns {string} The serialized query string segment
 */
function serializeQueryNameValue(nameValue) {
    const isExpectedType = typeof nameValue.value === "string" ||
        typeof nameValue.value === "number" ||
        typeof nameValue.value === "boolean";
    if (!isExpectedType)
        throw new TypeError(`Expected nameValue.value to be of type ResolveableQueryValue, got ${typeof nameValue.value}`);
    return `${encodeURIComponent(nameValue.name)}=${encodeURIComponent(nameValue.value)}`;
}
exports.serializeQueryNameValue = serializeQueryNameValue;
