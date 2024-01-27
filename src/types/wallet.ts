export interface IWallet {
  customer_id: string
  preferred_bank: string
  alias: string
}

export interface IWalletResponse {
  success: boolean
  data: {
    id: string
    name: string
    created_at: string
    account_number: string
    bank_name: string
    balance: number
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
  }
  message: string
}
