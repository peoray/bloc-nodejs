interface IPaymentLink {
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

export interface ICreatePaymentLinkRequest {
  name: string
  description: string
  amount: number
  currency: string
}

export interface IPaymentLinkResponse {
  success: boolean
  data: IPaymentLink
  message: string
}

export interface IGetPaymentLinksResponse {
  success: boolean
  data: IPaymentLink[]
  message: string
}

export interface IEditPaymentLinkRequest {
  name: string
  description: string
}

export interface IDeletePaymentLinksRequest {
  ids: string[]
}

export interface IDeletePaymentLinksResponse {
  success: boolean
  message: string
}
