# Bloc Nodejs SDK

![npm (scoped)](https://img.shields.io/npm/v/bloc-nodejs?color=%23FF7B37&style=flat-square) ![npm](https://img.shields.io/npm/dm/bloc-nodejs?style=flat-square)

A Nodejs API wrapper for [Bloc](https://www.blochq.io/) banking services written in typescript

## Table of content

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Prerequisites

Node v16 and higher is required. To make sure you have them available on your machine, try running the following command.

```sh
 node -v
```

## Getting Started

To get started with this SDK, create an account on [Bloc](https://app.blochq.io/auth/sign-up) if you haven't already.
You can then retrieve your API keys from your [Bloc dashboard](https://docs.blochq.io/docs/quick-start).

## Installation

This SDK can be installed with npm or yarn or pnpm.

```sh
# using npm
npm install bloc-nodejs
# using yarn
yarn install bloc-nodejs
# using pnpm
pnpm add bloc-nodejs
```

## Usage

Import and Initialize the library

```ts
// use modules
import { Bloc } from 'bloc-nodejs';
// use cjs
const { Bloc } = require('bloc-nodejs')

// Instantiate the bloc class
const bloc = new Bloc('SECRET_KEY, PUBLIC_KEY');
```

## License

[MIT](https://github.com/peoray/bloc-nodejs/blob/main/LICENSE)

[Back to Top](#table-of-content)