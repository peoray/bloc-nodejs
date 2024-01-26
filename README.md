# Bloc Nodejs SDK

![npm (scoped)](https://img.shields.io/npm/v/bloc-nodejs?color=%23FF7B37&style=flat-square) ![npm](https://img.shields.io/npm/dm/bloc-nodejs?style=flat-square)

A Nodejs API wrapper for [Bloc](https://www.blochq.io/) banking services written in typescript

## Table of content

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Methods exposed by the SDK](#available-methods-exposed-by-the-sdk)
  - [Checkout API](#checkout-api)
    - [Create Checkout](#create-checkout)
  - [Customers API](#customers-api)
    - [Create Customer](#create-customer)
    - [Get Customers](#get-customers)
    - [Upgrade Customer to KYC T1](#upgrade-customer-to-kyc-t1)
    - [Upgrade Customer to KYC T2](#upgrade-customer-to-kyc-t2)
    - [Upgrade Customer to KYC T3](#upgrade-customer-to-kyc-t3)
    - [Update Customer](#update-customer)
    - [Get Customer By ID](#get-customer-by-id)
    - [Means of Identification](#means-of-identification)
    - [Revalidate Customer KYC](#revalidate-customer-kyc)
  - [Miscellaneous API](#miscellaneous-api)
    - [Get List of Banks](#get-list-of-banks)
    - [Resolve Account](#resolve-account)
    - [Get Exchange Rate](#get-exchange-rate)
  - [Simulation API](#simulation-api)
    - [Credit Account](#credit-account)
    - [Debit Account](#debit-account)
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

## Available Methods exposed by the SDK

### Checkout API

Checkout API operations

#### Create Checkout

```ts
// import the create checkout interfaces from the sdk
import type { ICreateCheckout, ICheckoutResponse } from 'bloc-nodejs';

const payload: ICreateCheckout = {
  // payload to create checkout
}

const response = await bloc.createCheckout(payload)
console.log(response) // ICheckoutResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/createcheckout)

### Customers API

Customer API operations

#### Create Customer

```ts
// import the customer interfaces from the sdk
import type { ICreateCustomer, ICreateCustomerResponse } from 'bloc-nodejs';

const payload: ICreateCustomer = {
  // payload to create checkout   
}

const response = await bloc.createCustomer(payload)
console.log(response) // ICreateCustomerResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/createcustomers)

#### Get Customers

```ts
// import the message interfaces from the sdk
import type { IGetCustomerResponse } from 'bloc-nodejs';

const response = await bloc.getCustomers()
console.log(response) // IGetCustomerResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getcustomers)

#### Upgrade Customer to KYC T1

```ts
// import the customer interfaces from the sdk
import type { IUpgradeCustomerToKYCT1, IUpgradeCustomerToKYCTierResponse } from 'bloc-nodejs';

const payload: IUpgradeCustomerToKYCT1 = {
  // payload data  
}

const response = await bloc.upgradeCustomerToKYCT1('customer-id', payload)
console.log(response) // IUpgradeCustomerToKYCTierResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/upgradecustomertokyct1)

#### Upgrade Customer to KYC T2

```ts
// import the customer interfaces from the sdk
import type { IUpgradeCustomerToKYCT2, IUpgradeCustomerToKYCTierResponse } from 'bloc-nodejs';

const payload: IUpgradeCustomerToKYCT2 = {
  // payload data  
}

const response = await bloc.upgradeCustomerToKYCT2('customer-id', payload)
console.log(response) // IUpgradeCustomerToKYCTierResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/upgradecustomertokyct2)

#### Upgrade Customer to KYC T3

```ts
// import the customer interfaces from the sdk
import type { IUpgradeCustomerToKYCT3, IUpgradeCustomerToKYCTierResponse } from 'bloc-nodejs';

const payload: IUpgradeCustomerToKYCT3 = {
  // payload data  
}

const response = await bloc.upgradeCustomerToKYCT3('customer-id', payload)
console.log(response) // IUpgradeCustomerToKYCTierResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/upgradecustomertokyct3)

#### Update Customer

```ts
// import the customer interfaces from the sdk
import type { IUpdateCustomer, IUpdateCustomerResponse } from 'bloc-nodejs';

const payload: IUpdateCustomer = {
  // payload data  
}

const response = await bloc.updateCustomer('customer-id', payload)
console.log(response) // IUpdateCustomerResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/updatecustomer)

#### Get Customer By ID

```ts
// import the customer interfaces from the sdk
import type { IGetCustomerByIdResponse } from 'bloc-nodejs';

const response = await bloc.getCustomerById('customer-id')
console.log(response) // IGetCustomerByIdResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getcustomerbyid)

#### Means of Identification

```ts
// import the customer interfaces from the sdk
import type { IMeansOfIdentification } from 'bloc-nodejs';

const response = await bloc.meansOfIdentification()
console.log(response) // IMeansOfIdentification
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/meansofidentification)

#### Revalidate Customer KYC

```ts
// import the customer interfaces from the sdk
import type { IRevalidateCustomerKYCResponse } from 'bloc-nodejs';

const response = await bloc.revalidateCustomerKYC('customer-id')
console.log(response) // IRevalidateCustomerKYCResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/revalidatecustomerkyc)

### Miscellaneous API

Miscellaneous API operations

#### Get List of Banks

```ts
// import the miscellaneous interfaces from the sdk
import type { IListOfBanksResponse } from 'bloc-nodejs';

const response = await bloc.getListOfBanks()
console.log(response) // IListOfBanksResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getlistofbanks)

#### Resolve Account

```ts
// import the miscellaneous interfaces from the sdk
import type { IResolveAccountResponse } from 'bloc-nodejs';

const response = await bloc.resolveAccount()
console.log(response) // IResolveAccountResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/resolveaccount)

#### Get Exchange Rate

```ts
// import the miscellaneous interfaces from the sdk
import type { IGetExchangeRateResponse } from 'bloc-nodejs';

const response = await bloc.getExchangeRate('NGN-USD')
console.log(response) // IGetExchangeRateResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getexchangerate)

### Simulation API

Simulation API operations

#### Credit Account

```ts
// import the simulation interfaces from the sdk
import type { ISimulationAccount, ICreditAccountResponse } from 'bloc-nodejs';

const payload: ISimulationAccount = {
  // payload data
}

const response = await bloc.creditAccount(payload)
console.log(response) // ICreditAccountResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/creditaccount)

#### Debit Account

```ts
// import the simulation interfaces from the sdk
import type { ISimulationAccount, IDebitAccountResponse } from 'bloc-nodejs';

const payload: ISimulationAccount = {
  // payload data
}

const response = await bloc.debitAccount(payload)
console.log(response) // IDebitAccountResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/debitaccount)

## License

[MIT](https://github.com/peoray/bloc-nodejs/blob/main/LICENSE)

[Back to Top](#table-of-content)