export interface IListOfBanksResponse {
  success: boolean
  data: {
    bank_name: string
    short_code: string
    bank_code: string
  }[]
  message: string
}
