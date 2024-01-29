interface ITransfer {
  amount: number
  bank_code: string
  account_number: string
  narration: string
  reference: string
}

export interface ITransferFromAFixedAccountRequest extends ITransfer {
  account_id: string
}

export interface ITransferResponse {
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

export interface ITransferFromOrganizationBalance extends ITransfer {}

export interface IInternalTransferRequest {
  amount: number
  from_account_id: string
  to_account_id: string
  narration: string
  reference: string
}

export interface IBulkTransferRequest {
  account_id: string
  bulk_list: ITransfer[]
}
