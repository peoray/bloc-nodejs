export interface IQueryParams {
  meta_data?: {
    [key: string]: string | number | boolean
  }
  per_page?: number
  start_date?: string
  account_number?: string
  bank_code?: string
  end_date?: string
  status?: string
  drcr?: string
  payment_method?: string
  source?: string
  card_id?: string
  account_id?: string
  customer_id?: string
  limit?: number
  bill: string
}
