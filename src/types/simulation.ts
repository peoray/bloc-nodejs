export interface ISimulationAccount {
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

export interface IDebitAccountResponse {
  success: boolean
  message: string
}
