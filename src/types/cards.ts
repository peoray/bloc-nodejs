export interface IIssueCardRequest {
  customer_id: string
  brand: string
}

export interface IIssueCardResponse {
  success: boolean
  data: {
    id: string
    customer_id: string
    account_id: string
    organization_id: string
    environment: string
    type: string
    name: string
    phone: string
    currency: string
    balance: number
    brand: string
    status: string
    billing_address: {
      street: string
      city: string
      state: string
      country: string
      postal_code: string
    }
    pan: string
    expiry_month: string
    expiry_year: string
    created_at: string
    updated_at: string
    linked: boolean
  }
  message: string
}
