# EveCloud JavaScript SDK

JavaScript client for the [EveCloud API](https://docs.evecloud.xyz/reference/api)

![Version](https://img.shields.io/github/package-json/v/evecloud/sdk)
![GitHub](https://img.shields.io/github/license/EveCloud/sdk)
[![DeepSource](https://app.deepsource.com/gh/EveCloud/sdk.svg/?label=Issues&token=_Vn3wXUTEY0WgVsyE3UOtrg8)](https://app.deepsource.com/gh/EveCloud/sdk/)

## Installation

### Node.js

Our package is available on GitHub Packages, so you will need to authenticate with GitHub to install it.
Check out the [GitHub Docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) for more information.

```bash
npm install @evecloud/sdk
```

### Browser

```js
<script src="https://cdn.jsdelivr.net/gh/evecloud/sdk@latest/dist/bundle.js"></script>
```

## Usage

Most endpoints require authentication, either with an Access Token or API Token. 
EveCloud SDK provides a simple way to set the token for all requests.

```js
const { setToken } = require('evecloud-sdk');

setToken('my-token');
```

```js
const { setToken, Account } = require('evecloud-sdk');

setToken('access-token');

Account.getInfo().then((data) => {
    console.log(data.username);
});
```