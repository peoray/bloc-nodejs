export interface ISupportedBillsResponse {
  success: boolean
  data: string[]
  message: string
}

export interface ISupportedOperatorsResponse {
  success: boolean
  data: {
    desc: string
    id: string
    name: string
    sector: string
  }[]
  message: string
}
