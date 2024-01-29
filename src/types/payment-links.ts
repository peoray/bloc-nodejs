export interface ICreatePaymentLinkRequest {
  name: string
  description: string
  amount: number
  currency: string
}

export interface ICreatePaymentLinkResponse {
  success: boolean
  data: {
    id: string
    organization_id: string
    created_at: string
    updated_at: string
    environment: string
    description: string
    name: string
    link_id: string
    country: string
    currency: string
    link_url: string
    amount: number
    is_disabled: boolean
  }
  message: string
}
