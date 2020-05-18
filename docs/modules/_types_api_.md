[nookipedia](../README.md) › [Globals](../globals.md) › ["types/api"](_types_api_.md)

# Module: "types/api"

## Index

### Type aliases

* [APIResponse](_types_api_.md#apiresponse)
* [Category](_types_api_.md#category)
* [Entry](_types_api_.md#entry)
* [Options](_types_api_.md#options)

## Type aliases

###  APIResponse

Ƭ **APIResponse**: *object*

Defined in src/types/api.ts:37

Represents what this wrapper will respond with
when calling the API for an entry on an endpoint.

#### Type declaration:

* **data**: *Type | null*

* **error**: *string | null*

* **valid**: *boolean*

___

###  Category

Ƭ **Category**: *object*

Defined in src/types/api.ts:62

Represents what the API responds with
when calling it for a request for a category.

#### Type declaration:

* **batchcomplete**: *string*

* **error**? : *undefined | object*

* **limits**(): *object*

  * **categorymembers**: *number*

* **query**(): *object*

  * **categorymembers**: *object[]*

___

###  Entry

Ƭ **Entry**: *object*

Defined in src/types/api.ts:16

Represents how this wrapper will format
information about an entry on an endpoint.

#### Type declaration:

* **api**: *string*

* **name**: *string*

* **url**: *string*

___

###  Options

Ƭ **Options**: *object*

Defined in src/types/api.ts:4

Options to use when calling the API.

#### Type declaration:

* **cache**: *boolean*
