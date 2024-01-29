# Bloc Nodejs SDK

![npm (scoped)](https://img.shields.io/npm/v/bloc-nodejs?color=%23FF7B37&style=flat-square) ![npm](https://img.shields.io/npm/dm/bloc-nodejs?style=flat-square)

A Nodejs API wrapper for [Bloc](https://www.blochq.io/) banking services written in typescript

## Table of content

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Methods exposed by the SDK](#available-methods-exposed-by-the-sdk)
  - [Wallets API](#wallets-api)
    - [Create Wallet](#create-wallet)
    - [Get Wallets](#get-wallet)
    - [Get Wallet by id](#get-wallet-by-id)
    - [Get Customer Wallets](#get-customer-wallets)
    - [Debit Wallet](#debit-wallet)
  - [Bills Payments API](#bills-payments-api)
    - [Get Supported Bills](#get-supported-bills)
    - [Get Supported Operators](#get-supported-operators)
    - [Get Operator Products](#get-operator-products)
    - [Customer Device Validation](#customer-device-validation)
    - [Make Payment](#make-payment)
  - [Disputes API](#bills-payments-api)
    - [Get Card Dispute Reasons](#get-card-dispute-reasons)
    - [Create Card Dispute](#create-card-dispute)
    - [Get Card Disputes](#get-card-disputes)
    - [Get Card Dispute](#get-card-dispute)
    - [Update Card Dispute](#update-card-dispute)
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
  - [Transactions API](#transactions-api)
    - [Get All Transactions](#get-all-transactions)
    - [Get Transaction by Reference](#get-transaction-by-reference)
  - [Transfers API](#transfer-api)
    - [Transfer From A Fixed Account](#transfer-from-a-fixed-account)
    - [Transfer From Organization Balance](#transfer-from-organization-balance)
    - [Internal transfer](#internal-transfer)
    - [Bulk transfer](#bulk-transfer)
  - [Webhook API](#webhook-api)
    - [Set Webhook](#set-webhook)
    - [Get Webhook](#get-webhook)
  - [Beneficiaries API](#beneficiaries-api)
    - [Create Beneficiary](#create-beneficiary)
    - [Get Beneficiary by ID](#get-beneficiary-by-id)
    - [Update Beneficiary](#update-beneficiary)
    - [Delete beneficiary](#delete-beneficiary)
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

### Wallets API

Wallets API operations

#### Create Wallet

```ts
// import the wallet interfaces from the sdk
import type { IWallet, IWalletResponse } from 'bloc-nodejs';

const payload: IWallet = {
  // payload to create wallet
}

const response = await bloc.createWallet(payload)
console.log(response) // IWalletResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/createwallet)

#### Get Wallets

```ts
// import the wallet interfaces from the sdk
import type { IGetWalletResponse } from 'bloc-nodejs';

const response = await bloc.getWallets()
console.log(response) // IGetWalletResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getwallets)

#### Get Wallet By ID

```ts
// import the wallet interfaces from the sdk
import type { IWalletResponse } from 'bloc-nodejs';

const response = await bloc.getWalletById('wallet-id')
console.log(response) // IWalletResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getwalletbyid)

#### Get Customer Wallets

```ts
// import the wallet interfaces from the sdk
import type { IGetCustomerWalletResponse } from 'bloc-nodejs';

const response = await bloc.getCustomerWallets('customer-id')
console.log(response) // IGetCustomerWalletResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getcustomerwallets)

#### Debit Wallet

```ts
// import the wallet interfaces from the sdk
import type { IDebitWallet, IGetCustomerWalletResponse } from 'bloc-nodejs';

const payload: IDebitWallet = {
  // payload to debit wallet
}

const response = await bloc.debitWallet(payload)
console.log(response) // IGetCustomerWalletResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/debitwallet)

### Bills Payments API

Bills Payments API operations

#### Get Supported Bills

```ts
// import the bills-payments interfaces from the sdk
import type { ISupportedBillsResponse } from 'bloc-nodejs';

const response = await bloc.getSupportedBills()
console.log(response) // ISupportedBillsResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getsupportedbills)

#### Get Supported Operators

```ts
// import the bills-payments interfaces from the sdk
import type { ISupportedOperatorsResponse } from 'bloc-nodejs';

const response = await bloc.getSupportedOperators()
console.log(response) // ISupportedOperatorsResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getsupportedoperators)

#### Get Operator Products

```ts
// import the bills-payments interfaces from the sdk
import type { IOperatorProductsResponse } from 'bloc-nodejs';

const response = await bloc.getOperatorProducts('operator-id')
console.log(response) // IOperatorProductsResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getoperatorproducts)

#### Customer Device Validation

```ts
// import the bills-payments interfaces from the sdk
import type { IGetCustomerWalletResponse } from 'bloc-nodejs';

const response = await bloc.customerDeviceValidation('operator-id')
console.log(response) // IGetCustomerWalletResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/customerdevicevalidation)

#### Make Payment

```ts
// import the bills-payment interfaces from the sdk
import type { IMakePaymentResponse, IMakePaymentResponse } from 'bloc-nodejs';

const payload: IMakePaymentResponse = {
  // payload to make payment
}

const response = await bloc.makePayment(payload)
console.log(response) // IMakePaymentResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/debitwallet)

### Disputes API

Disputes API operations

#### Get Card Dispute Reasons

```ts
// import the disputes interfaces from the sdk
import type { IGetCardDisputeReasonsResponse } from 'bloc-nodejs';

const response = await bloc.getCardDisputeReasons()
console.log(response) // IGetCardDisputeReasonsResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getcarddisputereasons)

#### Create Card Dispute

```ts
// import the disputes interfaces from the sdk
import type { ICreateCardDisputeRequest, ICardDisputeResponse } from 'bloc-nodejs';

const payload: ICreateCardDisputeRequest = {
  // payload to create card dispute
}

const response = await bloc.createCardDispute(payload)
console.log(response) // ICardDisputeResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/createcarddispute)

#### Get Card Disputes

```ts
// import the disputes interfaces from the sdk
import type { IGetCardDisputesResponse } from 'bloc-nodejs';

const response = await bloc.getCardDisputes()
console.log(response) // IGetCardDisputesResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getcarddisputes)

#### Get Card Dispute

```ts
// import the disputes interfaces from the sdk
import type { ICardDisputeResponse } from 'bloc-nodejs';

const response = await bloc.getCardDisputeById('dispute-id')
console.log(response) // ICardDisputeResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getcarddispute)

#### Update Card Dispute

```ts
// import the disputes interfaces from the sdk
import type { IUpdateCardDisputeRequest, ICardDisputeResponse } from 'bloc-nodejs';

const payload: IUpdateCardDisputeRequest = {
  // payload to update card dispute
}

const response = await bloc.updateCardDispute('dispute-id', payload)
console.log(response) // ICardDisputeResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/updatecarddispute)

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

### Transactions API

Transactions API operations

#### Get All Transactions

```ts
// import the transactions interfaces from the sdk
import type { ITransactionResponse } from 'bloc-nodejs';

const response = await bloc.getAllTransactions()
console.log(response) // ITransactionResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getalltransactions)

#### Get Transaction by Reference

```ts
// import the transactions interfaces from the sdk
import type { ITransactionByReferenceResponse } from 'bloc-nodejs';

const response = await bloc.getTransactionByReference('ref_num')
console.log(response) // ITransactionByReferenceResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getalltransactions)


### Transfers API

Transfers API operations

#### Transfer From A Fixed Account

```ts
// import the transfers interfaces from the sdk
import type { ITransferFromAFixedAccountRequest, ITransferResponse } from 'bloc-nodejs';

const payload: ITransferFromAFixedAccountRequest = {
  // payload data  
}

const response = await bloc.transferFromAFixedAccount(payload)
console.log(response) // ITransferResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/transferfromafixedaccount)

#### Transfer From Organization Balance

```ts
// import the transfers interfaces from the sdk
import type { ITransferFromOrganizationBalance, ITransferResponse } from 'bloc-nodejs';

const payload: ITransferFromOrganizationBalance = {
  // payload data  
}

const response = await bloc.transferFromOrganizationBalance(payload)
console.log(response) // ITransferResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/transferfromorganizationbalance)

#### Internal Transfer

```ts
// import the transfers interfaces from the sdk
import type { IInternalTransferRequest, ITransferResponse } from 'bloc-nodejs';

const payload: IInternalTransferRequest = {
  // payload data  
}

const response = await bloc.internalTransfer(payload)
console.log(response) // ITransferResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/internaltransfer)

#### Bulk Transfer

```ts
// import the transfers interfaces from the sdk
import type { IBulkTransferRequest, ITransferResponse } from 'bloc-nodejs';

const payload: IBulkTransferRequest = {
  // payload data  
}

const response = await bloc.bulkTransfer(payload)
console.log(response) // ITransferResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/bulktransfer)

### Webhook API

Webhook API operations

#### Set Webhook

```ts
// import the webhook interfaces from the sdk
import type { ISetWebhook, IWebhookResponse } from 'bloc-nodejs';

const payload: ISetWebhook = {
  // payload data  
}

const response = await bloc.setWebhook(payload)
console.log(response) // IWebhookResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/setwebhook)

#### Get Webhook

```ts
// import the webhook interfaces from the sdk
import type { IWebhookResponse } from 'bloc-nodejs';

const response = await bloc.getWebhook()
console.log(response) // IWebhookResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getwebhook)

### Beneficiaries API

Beneficiaries API operations

#### Create Beneficiary

```ts
// import the beneficiary interfaces from the sdk
import type { ICreateBeneficiary, IBeneficiaryResponse } from 'bloc-nodejs';

const payload: ICreateBeneficiary = {
  // payload data  
}

const response = await bloc.createBeneficiary(payload)
console.log(response) // IBeneficiaryResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/createbeneficiary)

#### Get Beneficiary by ID

```ts
// import the beneficiary interfaces from the sdk
import type { IBeneficiaryResponse } from 'bloc-nodejs';

const response = await bloc.getBeneficiaryById('beneficiary-id')
console.log(response) // IBeneficiaryResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/getbeneficiarybyid)

#### Update Beneficiary

```ts
// import the beneficiary interfaces from the sdk
import type { IUpdateBeneficiary, IBeneficiaryResponse } from 'bloc-nodejs';

const payload: ICreateBeneficiary = {
  // payload data  
}

const response = await bloc.updateBeneficiary('beneficiary-id', payload)
console.log(response) // IBeneficiaryResponse
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/updatebeneficiary)

#### Delete Beneficiary

```ts
const response = await bloc.deleteBeneficiary('beneficiary-id')
console.log(response) // any
```

Find more details about the parameters and response for the above method [here](https://docs.blochq.io/reference/deletebeneficiary)

## License

[MIT](./LICENSE)

[Back to Top](#table-of-content)