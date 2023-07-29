# EveCloud JavaScript SDK

JavaScript client for the [EveCloud API](https://docs.evecloud.xyz/reference/rest-api)

![npm](https://img.shields.io/npm/v/evecloud-sdk)
![GitHub](https://img.shields.io/github/license/EveCloud/sdk)
[![DeepSource](https://app.deepsource.com/gh/EveCloud/sdk.svg/?label=active+issues&token=_Vn3wXUTEY0WgVsyE3UOtrg8)](https://app.deepsource.com/gh/EveCloud/sdk/)
![npm](https://img.shields.io/npm/dt/evecloud-sdk)

## Installation

### Node.js

```
$ npm install evecloud-sdk
```

### Browser

EveCloud CDN:
```js
<script src="https://cdn.evecloud.xyz/sdk/bundle.js"></script>
```

unpkg CDN:
```js
<script src="https://unpkg.com/evecloud-sdk@latest/dist/bundle.js"></script>
```

## Usage

Most endpoints require authentication, either with an Access Token or API Token. 
EveCloud SDK provides a simple way to set the token for all requests.

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