# rep.tf API Wrapper for node.js

[![NPM version](http://img.shields.io/npm/v/reptf.svg?style=flat)](https://www.npmjs.org/package/reptf)
[![Dependency Status](https://david-dm.org/scholtzm/node-reptf.svg)](https://david-dm.org/scholtzm/node-reptf)
[![Build Status](https://travis-ci.org/scholtzm/node-reptf.svg?branch=master)](https://travis-ci.org/scholtzm/node-reptf)

Very thin wrapper for the API provided by [rep.tf](http://rep.tf).

### Installation

`npm install reptf`

### Usage

```js
var reptf = require('reptf');

// You can change the timeout value if you wish
reptf.timeout = 5000;

// All methods are "static"
reptf.getBans('76561197960435530', function(err, res) {
  if(!err) {
    console.log(res);
  }
});

reptf.getProfile('76561197960435530', function(err, res) {
  if(!err)
    console.log(res);
  }
});
```

### Properties

##### timeout

Timeout value used for HTTP requests. Defaults to 10000ms (10 seconds).

### Methods

##### getBans(steamID, callback)

- `steamID` - user's SteamID64 as string
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is object returned by the API

Provides information about user's bans across various trading communities.

##### getProfile(steamID, callback)

- `steamID` - user's SteamID64 as string
- `callback` - should be `function(error, result)`
	- `error` comes from the HTTP request
	- `result` is object returned by the API

Provides information about user's overall Steam profile.  

### License

MIT. See `LICENSE`.
