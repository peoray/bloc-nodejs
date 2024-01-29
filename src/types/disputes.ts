export interface IGetCardDisputeReasonsResponse {
  success: boolean
  data: {
    reason: string
  }[]
  message: string
}

export interface ICreateCardDisputeRequest {
  transaction_id: string
  reason: string
  explanation: string
  meta_data: {
    payment: string
  }
}

interface ICardDispute {
  id: string
  customer_id: string
  organisation_id: string
  environment: string
  card_id: string
  transaction_id: string
  created_at: string
  updated_at: string
  transaction_amount: number
  reason: string
  explanation: string
  status: string
  metadata: {
    payment: string
  }
}

export interface ICreateCardDisputeResponse {
  success: boolean
  data: ICardDispute
  message: string
}

export interface IGetCardDisputesResponse {
  success: boolean
  data: ICardDispute[]
  message: string
}
