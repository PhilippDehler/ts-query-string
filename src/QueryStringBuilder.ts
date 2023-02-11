import { serializeQueryNameValues } from "./serializer";
import { QueryValue, ResolveableQueryValue } from "./types";

/**
 * Builds a query string by adding query values one by one
 * @template T
 * @param {T} [nameValues=[]] - The initial list of query values
 * @returns {Object} The query string builder object
 * @property {Array<QueryValue>} nameValues - The list of query values
 * @property {function(Object): QueryStringBuilder<[...T, typeof input]>} add - Adds a query value to the list
 * @property {function(): EncodeQueryString<T>} build - Builds and returns the final query string
 */
export function QueryStringBuilder<T extends QueryValue[]>(
  nameValues: T = [] as any
) {
  const self = {
    nameValues: nameValues,
    /**
     * Adds a query value to the list
     * @template Name
     * @template Value
     * @param {Object} input - The query value to add
     * @param {Name} input.name - The name of the query value
     * @param {Value} input.value - The value of the query value
     * @returns {QueryStringBuilder<[...T, typeof input]>} The updated query string builder
     */
    add: <Name extends string, Value extends ResolveableQueryValue>(input: {
      name: Name;
      value: Value;
    }) => {
      return QueryStringBuilder<[...T, typeof input]>([
        ...self.nameValues,
        input,
      ]);
    },

    /**
     * Build the query string from the name-value pairs.
     *
     * @returns The query string representation of the name-value pairs.
     */
    build: () => serializeQueryNameValues(self.nameValues),
  };
  return self;
}
