"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QueryStringBuilder_1 = require("../src/QueryStringBuilder");
const serializer_1 = require("../src/serializer");
describe("serializeQueryNameValues", () => {
    test("serialize single query name value", () => {
        const input = [{ name: "foo", value: "bar" }];
        const expected = "foo=bar";
        expect((0, serializer_1.serializeQueryNameValues)(input)).toBe(expected);
    });
    test("serialize multiple query name values", () => {
        const input = [
            { name: "foo", value: "bar" },
            { name: "baz", value: 123 },
            { name: "qux", value: true },
        ];
        const expected = "foo=bar&baz=123&qux=true";
        expect((0, serializer_1.serializeQueryNameValues)(input)).toBe(expected);
    });
});
describe("serializeQueryNameValue", () => {
    test("serialize query name value", () => {
        const input = { name: "foo", value: "bar" };
        const expected = "foo=bar";
        expect((0, serializer_1.serializeQueryNameValue)(input)).toBe(expected);
    });
});
describe("QueryStringBuilder", () => {
    test("build query string with no values", () => {
        const input = [];
        const expected = "";
        expect((0, QueryStringBuilder_1.QueryStringBuilder)(input).build()).toBe(expected);
    });
    test("build query string with single value", () => {
        const input = [{ name: "foo", value: "bar" }];
        const expected = "foo=bar";
        expect((0, QueryStringBuilder_1.QueryStringBuilder)(input).build()).toBe(expected);
    });
    test("build query string with multiple values", () => {
        const input = [
            { name: "foo", value: "bar" },
            { name: "baz", value: 123 },
            { name: "qux", value: true },
        ];
        const expected = "foo=bar&baz=123&qux=true";
        expect((0, QueryStringBuilder_1.QueryStringBuilder)(input).build()).toBe(expected);
    });
    test("build query string with special characters", () => {
        const input = [{ name: "foo", value: "bar baz" }];
        const expected = "foo=bar%20baz";
        expect((0, QueryStringBuilder_1.QueryStringBuilder)(input).build()).toBe(expected);
    });
    test("add query string value", () => {
        const input = [{ name: "foo", value: "bar" }];
        const expected = "foo=bar&baz=qux";
        expect((0, QueryStringBuilder_1.QueryStringBuilder)(input).add({ name: "baz", value: "qux" }).build()).toBe(expected);
    });
});
