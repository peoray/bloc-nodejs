export interface ICreditAccount {
  amount: number
  account_id: string
}

export interface ICreditAccountResponse {
  success: boolean
  data: {
    id: string
    balance: number
  }
  message: string
}
