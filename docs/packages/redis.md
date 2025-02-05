# @restroom-mw/redis

Is a basic middleware to make basic operations on [redis](https://redis.io).

Interpretes the [actions](#action) to connect to a redis server and save the result with a `SET` or a `HMSET`.

## Usage

```js
import express from "express";
import zencode from "@restroom-mw/core";
import db from "@restroom-mw/redis";

const app = express();

app.use(redis);
app.use("/api/*", zencode);
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [Action](#action)
    *   [CONNECT](#connect)
        *   [Parameters](#parameters)
    *   [SET](#set)
        *   [Parameters](#parameters-1)
    *   [GET](#get)
        *   [Parameters](#parameters-2)
    *   [SET_NAMED](#set_named)
        *   [Parameters](#parameters-3)
    *   [GET_NAMED](#get_named)
        *   [Parameters](#parameters-4)

### Action

[packages/redis/src/index.ts:10-38](https://github.com/dyne/restroom-mw/blob/fa95735ca50c7ee972a0a3eafca5d756733565f9/packages/redis/src/index.ts#L10-L38 "Source code on GitHub")

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

#### CONNECT

[packages/redis/src/index.ts:15-15](https://github.com/dyne/restroom-mw/blob/fa95735ca50c7ee972a0a3eafca5d756733565f9/packages/redis/src/index.ts#L15-L15 "Source code on GitHub")

Given I have a redis connection on {}

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

##### Parameters

*   `connection` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** url

#### SET

[packages/redis/src/index.ts:20-20](https://github.com/dyne/restroom-mw/blob/fa95735ca50c7ee972a0a3eafca5d756733565f9/packages/redis/src/index.ts#L20-L20 "Source code on GitHub")

Given I write data into redis under the key {}

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

##### Parameters

*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### GET

[packages/redis/src/index.ts:26-26](https://github.com/dyne/restroom-mw/blob/fa95735ca50c7ee972a0a3eafca5d756733565f9/packages/redis/src/index.ts#L26-L26 "Source code on GitHub")

Given I read from redis the data under the key {} and save the output into {}

##### Parameters

*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `output` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### SET_NAMED

[packages/redis/src/index.ts:31-31](https://github.com/dyne/restroom-mw/blob/fa95735ca50c7ee972a0a3eafca5d756733565f9/packages/redis/src/index.ts#L31-L31 "Source code on GitHub")

Given I write data into redis under the key named {}

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

##### Parameters

*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### GET_NAMED

[packages/redis/src/index.ts:37-37](https://github.com/dyne/restroom-mw/blob/fa95735ca50c7ee972a0a3eafca5d756733565f9/packages/redis/src/index.ts#L37-L37 "Source code on GitHub")

Given I read from redis the data under the key named {} and save the output into {}

##### Parameters

*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `output` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
