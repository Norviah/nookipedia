[nookipedia](../README.md) › [Globals](../globals.md) › ["types/endpoints"](_types_endpoints_.md)

# Module: "types/endpoints"

## Index

### Type aliases

* [Critter](_types_endpoints_.md#critter)
* [Endpoints](_types_endpoints_.md#endpoints)
* [Fossil](_types_endpoints_.md#fossil)
* [Names](_types_endpoints_.md#names)
* [Today](_types_endpoints_.md#today)
* [Villager](_types_endpoints_.md#villager)

## Type aliases

###  Critter

Ƭ **Critter**: *object*

Defined in src/types/endpoints.ts:34

Represents what the API will respond for a request about a critter.

#### Type declaration:

* **api-cache-expire**: *string*

* **cached**: *string*

* **caught**: *string*

* **family**: *string*

* **image**: *string*

* **link**: *string*

* **location**: *string*

* **message**: *string*

* **name**: *string*

* **price**: *string*

* **rarity**: *string*

* **scientific-name**: *string*

* **size**: *string*

* **time-day**: *string*

* **time-year**: *string*

* **updated**: *string*

___

###  Endpoints

Ƭ **Endpoints**: *[Villager](_types_endpoints_.md#villager) | [Fossil](_types_endpoints_.md#fossil) | [Critter](_types_endpoints_.md#critter)*

Defined in src/types/endpoints.ts:4

Represents the types of endpoints that is available through Nookipedia's API.

___

###  Fossil

Ƭ **Fossil**: *object*

Defined in src/types/endpoints.ts:119

Represents what the API will respond for a request about a fossil.

#### Type declaration:

* **api-cache-expire**: *string*

* **cached**: *string*

* **image**: *string*

* **length**: *string*

* **link**: *string*

* **message**: *string*

* **name**: *string*

* **period**: *string*

* **price**: *string*

* **scientific-name**: *string*

* **sections**: *string*

* **updated**: *string*

___

###  Names

Ƭ **Names**: *"villager" | "fossil" | "critter"*

Defined in src/types/endpoints.ts:9

Represents the names of endpoints available through Nookiepdia's API.

___

###  Today

Ƭ **Today**: *object*

Defined in src/types/endpoints.ts:14

Represents what the API will respond for a request about the events for a date.

#### Type declaration:

* **events**: *string[]*

* **message**: *string*

* **villager_images**: *string[]*

___

###  Villager

Ƭ **Villager**: *object*

Defined in src/types/endpoints.ts:184

Represents what the API will respond for a request about a villager.

#### Type declaration:

* **api-cache-expire**: *string*

* **birthday**: *string*

* **cached**: *string*

* **clothes**: *string*

* **coffee-milk**: *string*

* **coffee-sugar**: *string*

* **coffee-type**: *string*

* **favclothing**: *string*

* **favcolor**: *string*

* **fear**: *string*

* **gender**: *string*

* **goal**: *string*

* **image**: *string*

* **islander-allergic**: *string*

* **islander-favorite**: *string*

* **leastfavclothing**: *string*

* **link**: *string*

* **message**: *string*

* **name**: *string*

* **name-ar**: *string*

* **name-ar-m**: *string*

* **name-ar-r**: *string*

* **name-de**: *string*

* **name-de-m**: *string*

* **name-es**: *string*

* **name-es-m**: *string*

* **name-esl**: *string*

* **name-esl-m**: *string*

* **name-fr**: *string*

* **name-fr-m**: *string*

* **name-frq**: *string*

* **name-frq-m**: *string*

* **name-it**: *string*

* **name-it-m**: *string*

* **name-jp**: *string*

* **name-jp-m**: *string*

* **name-jp-r**: *string*

* **name-ko**: *string*

* **name-ko-m**: *string*

* **name-ko-r**: *string*

* **name-nl**: *string*

* **name-nl-m**: *string*

* **name-pt**: *string*

* **name-pt-m**: *string*

* **name-ru**: *string*

* **name-ru-m**: *string*

* **name-ru-r**: *string*

* **name-zh**: *string*

* **name-zh-m**: *string*

* **name-zh-r**: *string*

* **name-zhq**: *string*

* **name-zhq-m**: *string*

* **name-zhq-r**: *string*

* **name-zht**: *string*

* **personality**: *string*

* **phrase**: *string*

* **picture**: *string*

* **quote**: *string*

* **siblings**: *string*

* **sign**: *string*

* **skill**: *string*

* **species**: *string*

* **updated**: *string*
