# Query String Builder

A JavaScript library for building and encoding query strings.

## Installation

```bash
npm install ts-query-string

```

## Usage

```typescript
import { QueryStringBuilder } from "ts-query-string";

const qs = QueryStringBuilder()
  .add({ name: "param1", value: "value1" })
  .add({ name: "param2", value: 2 })
  .add({ name: "param3", value: "value3" })
  .add({ name: "param4", value: "value4 with spaces" });
  .build();
type QS = typeof qs; // QS = "param1=value1&param2=2&param3=value3&param4=value4%20with%20spaces"

console.log(qs); // QS = "param1=value1&param2=2&param3=value3&param4=value4%20with%20spaces"
```

## API Reference

`QueryStringBuilder`

A class for building a query string.

### add

Add a name-value pair to the query string.

```typescript
function add<Name extends string, Value extends ResolveableQueryValue>(input: {
  name: Name;
  value: Value;
}): QueryStringBuilder<[...T, typeof input]>;
```

### build

Build the query string from the name-value pairs.

```typescript
function build(): EncodeQueryString<T>;
```

### EncodeQueryString

A type that represents a query string encoded from the name-value pairs of type T.

```typescript
type EncodeQueryString<T extends QueryValue[]> = ...
```

### EncodeUri

A type that represents the result of encoding a ResolveableQueryValue type.

```typescript
type EncodeUri<T extends ResolveableQueryValue> = ...
```

### ResolveableQueryValue

A type that represents a value that can be resolved to a string.

```typescript
type ResolveableQueryValue = string | number | boolean;
```

### Notes

- The `add` method returns a new instance of `QueryStringBuilder` with the new name-value pair added to the type parameter `T`.
- If you insert a value that is not a `ResolveableQueryValue` type, the compiler will throw an error.
- This package is written in TypeScript and the types are exported.
- If somehow you get an `Unecodeable<{character}>` in your query string type please open an issue or pull request.
