[nookipedia](README.md) › [Globals](globals.md)

# nookipedia

A simple wrapper for [Nookipedia's](https://nookipedia.com) API. When calling an endpoint (one of `critter, villager, or fossil`) for an entry, the result is always cached and will be returned for requests of the same entry from then on, until the cache expires. The data is cached into an extension of a Map with the key as the name from the API's response, when checking to see if an entry is cached, a string algorithm is used so things like accents shouldn't cause too much of a problem. For the `critter` endpoint, there is no data representing how long until the response is considered expired, so it's manually set that that data will be considered expired from 6 hours from the initial request.

All methods from the wrapper returns in the form of:

```typescript
{
  valid: boolean;
  error: string | null;
  data: [data] | null;
}
```
`valid` determines if the call was successful and that the `data` property has the wanted data, if `valid` is false, then `error` represents the error that had occurred. The only exception is the `today` endpoint, which returns information as its received from the API.

### Installation

`npm install nookipedia`

### Documentation

The documentation can be viewed in the [documentation](./docs/globals.md) directory.

### Usage

The basic usage for endpoints looks like this

```javascript
const { Nookipedia } = require("nookipedia");

// You can request an API key at Nookipedia's main api page:
// https://nookipedia.com/api/.
const api = new Nookipedia("[key]");

// Get the villager 'Freya' from the villager endpoint.
let freya = await api.villagers.get('freya');

// From then on, until the cache expires, a request for
// the villager 'Freya' will be the cached data.
freya = await api.villagers.get('freya'); // => cached data

// If, for whatever reason, you would like to get a response straight
// from the API and not cached data, which includes the other endpoints as well,
// pass a 'cache' property onto the options parameter with the value of 'false'.
freya = await api.villagers.get('freya', { cache: false }); // => data straight from the API.
```
