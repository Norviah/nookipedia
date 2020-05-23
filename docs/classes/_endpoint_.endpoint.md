[nookipedia](../README.md) › [Globals](../globals.md) › ["endpoint"](../modules/_endpoint_.md) › [Endpoint](_endpoint_.endpoint.md)

# Class: Endpoint <**Endpoint**>

## Type parameters

▪ **Endpoint**: *endpoint.Endpoints*

## Hierarchy

* **Endpoint**

## Index

### Constructors

* [constructor](_endpoint_.endpoint.md#constructor)

### Properties

* [cache](_endpoint_.endpoint.md#private-cache)
* [key](_endpoint_.endpoint.md#key)
* [name](_endpoint_.endpoint.md#name)
* [url](_endpoint_.endpoint.md#private-url)

### Methods

* [call](_endpoint_.endpoint.md#private-call)
* [get](_endpoint_.endpoint.md#get)
* [list](_endpoint_.endpoint.md#list)

## Constructors

###  constructor

\+ **new Endpoint**(`name`: endpoint.Names, `key`: string): *[Endpoint](_endpoint_.endpoint.md)*

*Defined in [src/endpoint.ts:28](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L28)*

Initializes a new Endpoint instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | endpoint.Names | The name of the endpoint. |
`key` | string | The API key.  |

**Returns:** *[Endpoint](_endpoint_.endpoint.md)*

## Properties

### `Private` cache

• **cache**: *[Cache](_cache_.cache.md)‹Endpoint›* = new Cache()

*Defined in [src/endpoint.ts:28](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L28)*

Holds a reference to cached data.

___

###  key

• **key**: *string*

*Defined in [src/endpoint.ts:18](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L18)*

The API key.

___

###  name

• **name**: *endpoint.Names*

*Defined in [src/endpoint.ts:13](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L13)*

The name of this endpoint.

___

### `Private` url

• **url**: *string* = "https://nookipedia.com/api"

*Defined in [src/endpoint.ts:23](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L23)*

The base url for Nookiepdia's API.

## Methods

### `Private` call

▸ **call**<**Type**>(`name`: string): *Promise‹api.APIResponse‹Type››*

*Defined in [src/endpoint.ts:45](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L45)*

Directly calls the API for the given name, and returns the result.

**Type parameters:**

▪ **Type**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name to retrieve from the API. |

**Returns:** *Promise‹api.APIResponse‹Type››*

The response from the API.

___

###  get

▸ **get**(`name`: string, `options`: api.Options): *Promise‹api.APIResponse‹Endpoint››*

*Defined in [src/endpoint.ts:114](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L114)*

Gets the given name from the API, returning cached data if
the entry is cached. The name must be a non-blank string, as that
will instead return a lsit for all entries for this endpoint,
but the 'list' method is used for this purpose.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | The name of the entry to get. |
`options` | api.Options | { cache: true } | Optional options to use. |

**Returns:** *Promise‹api.APIResponse‹Endpoint››*

The response for the given entry.

___

###  list

▸ **list**(): *Promise‹api.APIResponse‹api.Entry[]››*

*Defined in [src/endpoint.ts:69](https://github.com/norviah/nookipedia/blob/f1c4ed5/src/endpoint.ts#L69)*

Returns an object containing every entry in this endpoint.

**Returns:** *Promise‹api.APIResponse‹api.Entry[]››*

An object containing every entry from the API of this endpoint.
