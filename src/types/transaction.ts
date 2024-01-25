interface ITransaction {
  id: string
  created_at: string
  updated_at: string
  amount: number
  reference: string
  status: string
  shared: boolean
  currency: string
  environment: string
  payment_method: string
  provider: string
  payment_type: string
  source: string
  meta_data: {
    sender_account_name: string
    sender_bank_name: string
  }
  organization_id: string
  customer_id: string
  fee: number
  billing_id: string
  customer_detail: {
    full_name: string
    phone_number: string
    email: string
    country: string
  }
  reversal: boolean
  reversed_transaction_id: string
  current_account_balance: number
  account_id: string
  card_id: string
  drcr: string
  operator_id: string
  operator_detail: {
    full_name: string
    phone_number: string
  }
}

export interface ITransactionResponse {
  success: boolean
  data: ITransaction[] | null
  message: string
  metadata: {
    has_next: boolean
    has_previous: boolean
  }
}

export interface ITransactionByReferenceResponse {
  success: boolean
  data: ITransaction
  message: string
}
