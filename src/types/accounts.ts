interface IAccount {
  id: string
  name: string
  preferred_bank: string
  bvn: string
  kyc_tier: string
  created_at: string
  updated_at: string
  status: string
  environment: string
  organization_id: string
  balance: number
  currency: string
  meta_data: string | null
  customer_id: string
  customer: {
    id: string
    email: string
    status: string
    kyc_tier: string
    phone_number: string
    first_name: string
    last_name: string
    customer_type: string
    bvn: string
  }
  account_number: string
  bank_name: string
  type: string
  collection_account: boolean
  hide_account: boolean
  SkipNumber: boolean
  managers: string | null
  external_account: {}
  alias: string
  collection_rules: {
    amount: number
    frequency: number
  }
}

interface ICollectionAccount {
  id: string
  name: string
  created_at: string
  account_number: string
  bank_name: string
  collection_rules: {
    frequency: number
    amount: number
  }
  preferred_bank: string
  environment: string
}

export interface ICreateFixedAccountRequest {
  customer_id: string
  preferred_bank: string
  alias: string
  collection_rules: {
    amount: number
    frequency: number
  }
}

export interface IAccountResponse {
  success: boolean
  data: IAccount
  message: string
}

export interface ICreateCollectionAccountRequest
  extends Omit<ICreateFixedAccountRequest, 'customer_id'> {
  customer_id?: never
}

export interface ICreateCollectionAccountResponse {
  success: boolean
  data: ICollectionAccount
  message: string
}

export interface IGetAccountsResponse {
  success: boolean
  data: IAccount[]
  message: string
}

export interface IGetCollectionAccountResponse {
  success: boolean
  data: ICollectionAccount[]
  message: string
}

export interface IGetOrganisationDefaultAccountsResponse {
  success: boolean
  data: {
    id: string
    type: string
    number: string
    balance: number
    bank: string
  }[]
  message: string
}

export interface IFreezeAccountRequest {
  reason: string
}

export interface IFreezeAccountResponse {
  success: boolean
  message: string
}
