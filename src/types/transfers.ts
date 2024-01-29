export interface ITransferFromAFixedAccountRequest {
  amount: number
  bank_code: string
  account_number: string
  narration: string
  account_id: string
  reference: string
}

export interface ITransferFromAFixedAccountResponse {
  success: boolean
  data: {
    reference: string
    account_id: string
    recipient_account_number: string
    recipient_account_name: string
    amount: number
    narration: string
    currency: string
    transaction_fee: number
    status: string
    create_at: string
  }
  message: string
}
