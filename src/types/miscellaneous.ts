export interface IListOfBanksResponse {
  success: boolean
  data: {
    bank_name: string
    short_code: string
    bank_code: string
  }[]
  message: string
}

export interface IResolveAccountResponse {
  success: boolean
  data: {
    account_name: string
    account_number: string
  }[]
  message: string
}

export interface IGetExchangeRateResponse {
  success: boolean
  data: {
    buy: string
    sell: string
  }[]
  message: string
}
