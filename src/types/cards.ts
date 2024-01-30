interface ICard {
  id: string
  type: string
  name: string
  billing_address: {
    street: string
    city: string
    state: string
    country: string
    postal_code: string
  }
  brand: string
  currency: string
  pan: string
  expiry_month: string
  expiry_year: string
  cvv: string
  pin: string
  status: string
  balance: number
}

interface ICardExtended extends ICard {
  customer_id: string
  account_id: string
  organization_id: string
  environment: string
  phone: string
  created_at: string
  updated_at: string
  linked: boolean
}

export interface IIssueCardRequest {
  customer_id: string
  brand: 'Verve' | 'MasterCard'
}

export interface ICardResponse {
  success: boolean
  data: ICardExtended
  message: string
}

export interface IGetCardsResponse {
  success: boolean
  data: ICardExtended[]
  message: string
}

export interface ICardSecureDataResponse extends ICard {}

export interface IChangeCardPinRequest {
  old_pin: string
  new_pin: string
}

export interface IBlockCardRequest {
  account_id: string
  reason: string
}
