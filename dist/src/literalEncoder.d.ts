import { QueryValue, ResolveableQueryValue } from "./types";
type EncodingTableKeys = keyof EncodingTable;
export type TestUnencodeable<Character extends string> = Character extends EncodingTableKeys ? EncodingTable[Character] : `Unecodeable<${Character}>`;
export type EncodeUri<QueryValue extends ResolveableQueryValue> = QueryValue extends `${infer Start}${infer Rest}` ? `${TestUnencodeable<Start>}${EncodeUri<Rest>}` : "";
/**
 * Build the query string from the name-value pairs.
 *
 * @returns The query string representation of the name-value pairs.
 */
export type EncodeQueryString<QueryValues extends QueryValue[]> = QueryValues extends [
    infer Head extends QueryValue,
    ...infer Rest extends QueryValue[]
] ? `${EncodeUri<Head["name"]>}=${EncodeUri<Head["value"]>}${Rest extends [] ? "" : "&"}${EncodeQueryString<Rest>}` : "";
export {};
