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
  data: {
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
}
