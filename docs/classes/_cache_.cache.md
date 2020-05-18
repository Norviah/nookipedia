[nookipedia](../README.md) › [Globals](../globals.md) › ["cache"](../modules/_cache_.md) › [Cache](_cache_.cache.md)

# Class: Cache <**Type**>

This is a simple class that extends off of the Map
class, it uses a string similarity algorithm
to try and find an object, rather than just using
the exact given string to retrieve.

## Type parameters

▪ **Type**

## Hierarchy

* [Map](_cache_.cache.md#static-map)‹string, Type›

  ↳ **Cache**

## Index

### Constructors

* [constructor](_cache_.cache.md#constructor)

### Properties

* [[Symbol.toStringTag]](_cache_.cache.md#readonly-[symbol.tostringtag])
* [size](_cache_.cache.md#readonly-size)
* [Map](_cache_.cache.md#static-map)

### Methods

* [[Symbol.iterator]](_cache_.cache.md#[symbol.iterator])
* [clear](_cache_.cache.md#clear)
* [delete](_cache_.cache.md#delete)
* [entries](_cache_.cache.md#entries)
* [find](_cache_.cache.md#find)
* [forEach](_cache_.cache.md#foreach)
* [get](_cache_.cache.md#get)
* [has](_cache_.cache.md#has)
* [keys](_cache_.cache.md#keys)
* [matches](_cache_.cache.md#matches)
* [set](_cache_.cache.md#set)
* [values](_cache_.cache.md#values)

## Constructors

###  constructor

\+ **new Cache**(): *[Cache](_cache_.cache.md)*

Defined in src/cache.ts:9

Initializes a new Cache instance.

**Returns:** *[Cache](_cache_.cache.md)*

## Properties

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [Cache](_cache_.cache.md).[[Symbol.toStringTag]](_cache_.cache.md#readonly-[symbol.tostringtag])*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Readonly` size

• **size**: *number*

*Inherited from [Cache](_cache_.cache.md).[size](_cache_.cache.md#readonly-size)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[string, Type]›*

*Inherited from [Cache](_cache_.cache.md).[[Symbol.iterator]](_cache_.cache.md#[symbol.iterator])*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[string, Type]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from [Cache](_cache_.cache.md).[clear](_cache_.cache.md#clear)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: string): *boolean*

*Inherited from [Cache](_cache_.cache.md).[delete](_cache_.cache.md#delete)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[string, Type]›*

*Inherited from [Cache](_cache_.cache.md).[entries](_cache_.cache.md#entries)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[string, Type]›*

___

###  find

▸ **find**(`name`: string): *Type | null*

Defined in src/cache.ts:42

Tries to find the given name in the map and returns
its entry as the generic type, if an entry can't be found null is returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The entry to look for. |

**Returns:** *Type | null*

The entry for the given name if it exists, otherwise, null.

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [Cache](_cache_.cache.md).[forEach](_cache_.cache.md#foreach)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Type, `key`: string, `map`: [Map](_cache_.cache.md#static-map)‹string, Type›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Type |
`key` | string |
`map` | [Map](_cache_.cache.md#static-map)‹string, Type› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *Type | undefined*

*Inherited from [Cache](_cache_.cache.md).[get](_cache_.cache.md#get)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Type | undefined*

___

###  has

▸ **has**(`name`: string): *boolean*

*Overrides void*

Defined in src/cache.ts:32

Determines if the given name exists within this map.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The string to look for. |

**Returns:** *boolean*

Represents if the given string has an entry in this map.

___

###  keys

▸ **keys**(): *IterableIterator‹string›*

*Inherited from [Cache](_cache_.cache.md).[keys](_cache_.cache.md#keys)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹string›*

___

###  matches

▸ **matches**(`name`: string): *string[]*

Defined in src/cache.ts:23

Searches through the Map's data and executes a
string similarity method to try and find an entry.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the entry to find. |

**Returns:** *string[]*

An array of possible matches.

___

###  set

▸ **set**(`key`: string, `value`: Type): *this*

*Inherited from [Cache](_cache_.cache.md).[set](_cache_.cache.md#set)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | Type |

**Returns:** *this*

___

###  values

▸ **values**(): *IterableIterator‹Type›*

*Inherited from [Cache](_cache_.cache.md).[values](_cache_.cache.md#values)*

Defined in node_modules/.pnpm/registry.npmjs.org/typescript/3.9.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹Type›*
