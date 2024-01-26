export interface ICreateCheckout {
  customer_email: string
  customer_name: string
  country: string
  amount: number
}

export interface ICheckoutResponse {
  success: boolean
  data: string
  message: string
}
