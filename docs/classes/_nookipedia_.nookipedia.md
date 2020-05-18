[nookipedia](../README.md) › [Globals](../globals.md) › ["nookipedia"](../modules/_nookipedia_.md) › [Nookipedia](_nookipedia_.nookipedia.md)

# Class: Nookipedia

A Typescript wrapper for Nookipedia's API.

## Hierarchy

* **Nookipedia**

## Index

### Constructors

* [constructor](_nookipedia_.nookipedia.md#constructor)

### Properties

* [critters](_nookipedia_.nookipedia.md#critters)
* [fossils](_nookipedia_.nookipedia.md#fossils)
* [key](_nookipedia_.nookipedia.md#key)
* [url](_nookipedia_.nookipedia.md#private-url)
* [villagers](_nookipedia_.nookipedia.md#villagers)

### Methods

* [category](_nookipedia_.nookipedia.md#category)
* [today](_nookipedia_.nookipedia.md#today)

## Constructors

###  constructor

\+ **new Nookipedia**(`key`: string): *[Nookipedia](_nookipedia_.nookipedia.md)*

Defined in src/nookipedia.ts:37

Initializes a new Nookipedia instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Your API key.  |

**Returns:** *[Nookipedia](_nookipedia_.nookipedia.md)*

## Properties

###  critters

• **critters**: *[Endpoint](_endpoint_.endpoint.md)‹endpoint.Critter›*

Defined in src/nookipedia.ts:32

The endpoint for critters,
note that this endpoint is in beta and that
the 'list' method isn't supported for now.

___

###  fossils

• **fossils**: *[Endpoint](_endpoint_.endpoint.md)‹endpoint.Fossil›*

Defined in src/nookipedia.ts:25

The endpoint for fossils.

___

###  key

• **key**: *string*

Defined in src/nookipedia.ts:15

Your API key, available at:
https://nookipedia.com/api/.

___

### `Private` url

• **url**: *string* = "https://nookipedia.com/api"

Defined in src/nookipedia.ts:37

The base url for Nookiepdia's API.

___

###  villagers

• **villagers**: *[Endpoint](_endpoint_.endpoint.md)‹endpoint.Villager›*

Defined in src/nookipedia.ts:20

The endpoint for villagers.

## Methods

###  category

▸ **category**(`category`: string): *Promise‹api.APIResponse‹string[]››*

Defined in src/nookipedia.ts:68

Returns an array representing all entries for this category.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`category` | string | The category to look for. |

**Returns:** *Promise‹api.APIResponse‹string[]››*

An array containing entries for the given category.

___

###  today

▸ **today**(`date?`: undefined | string): *Promise‹endpoint.Today›*

Defined in src/nookipedia.ts:56

Returns an object representing the events for the
current date, or, the given date if one is given.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date?` | undefined &#124; string | The date to get events for, in strotime format. |

**Returns:** *Promise‹endpoint.Today›*

Events that occur at the given date.
