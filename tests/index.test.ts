import { QueryStringBuilder } from "../src/QueryStringBuilder";
import {
  serializeQueryNameValue,
  serializeQueryNameValues,
} from "../src/serializer";

describe("serializeQueryNameValues", () => {
  test("serialize single query name value", () => {
    const input = [{ name: "foo", value: "bar" }];
    const expected = "foo=bar";
    expect(serializeQueryNameValues(input)).toBe(expected);
  });

  test("serialize multiple query name values", () => {
    const input = [
      { name: "foo", value: "bar" },
      { name: "baz", value: 123 },
      { name: "qux", value: true },
    ];
    const expected = "foo=bar&baz=123&qux=true";
    expect(serializeQueryNameValues(input)).toBe(expected);
  });
});

describe("serializeQueryNameValue", () => {
  test("serialize query name value", () => {
    const input = { name: "foo", value: "bar" };
    const expected = "foo=bar";
    expect(serializeQueryNameValue(input)).toBe(expected);
  });
});

describe("QueryStringBuilder", () => {
  test("build query string with no values", () => {
    const input: any = [];
    const expected = "";
    expect(QueryStringBuilder(input).build()).toBe(expected);
  });

  test("build query string with single value", () => {
    const input = [{ name: "foo", value: "bar" }];
    const expected = "foo=bar";
    expect(QueryStringBuilder(input).build()).toBe(expected);
  });

  test("build query string with multiple values", () => {
    const input = [
      { name: "foo", value: "bar" },
      { name: "baz", value: 123 },
      { name: "qux", value: true },
    ];
    const expected = "foo=bar&baz=123&qux=true";
    expect(QueryStringBuilder(input).build()).toBe(expected);
  });

  test("build query string with special characters", () => {
    const input = [{ name: "foo", value: "bar baz" }];
    const expected = "foo=bar%20baz";
    expect(QueryStringBuilder(input).build()).toBe(expected);
  });

  test("add query string value", () => {
    const input = [{ name: "foo", value: "bar" }];
    const expected = "foo=bar&baz=qux";
    expect(
      QueryStringBuilder(input).add({ name: "baz", value: "qux" }).build()
    ).toBe(expected);
  });
});
