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

export interface IOperatorProductsResponse {
  success: boolean
  data: {
    category: string
    desc: string | null
    fee_type: string
    id: string
    meta: string | null
    name: string
    operator: string
  }[]
  message: string
}

export interface ICustomerDeviceValidationResponse {
  success: boolean
  data: {
    address: string
    email: string
    name: string
    phone: string
  }
  message: string
}
