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

export interface IMakePaymentRequest {
  amount: number
  product_id: string
  operator_id: string
  account_id: string
  device_details: {
    meter_type: string
    device_number: string
    beneficiary_msisdn: string
  }
  meta_data: Record<string, any>
}

export interface IMakePaymentResponse {
  success: boolean
  data: {
    created_at: string
    status: string
    amount: number
    reference: string
    customer_name: string
    operator_id: string
    product_id: string
    bill_type: string
    meta_data: {
      operator_name: string
      token: string
    }
  }
  message: string
}
