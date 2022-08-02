# EveCloud JavaScript SDK

JavaScript client for the [EveCloud API](https://docs.evecloud.xyz/api)

## Installation

```
$ npm install @evecloud-sdk
```

or with a CDN:

```js
<script src="https://unpkg.com/evecloud-sdk@latest/dist/bundle.js"></script>
```

## Usage

Most endpoints require authentication, either with an Auth Token or Personal Access Token.
Once you have your token, authenticating involves adding an Authorization header to each request:

```js
const { setToken } = require('evecloud-sdk');

setToken('my-token');
```

```js
/** index.js */

const { setToken, Account } = require('evecloud-sdk');

setToken('access-token');

Account.getInfo().then((data) => {
    console.log(data.username);
});
```