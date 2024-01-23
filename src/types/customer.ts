export interface ICreateCustomer {
  email: string
  phone_number: string
  first_name: string
  last_name: string
  customer_type: string
  bvn: string
}

export interface ICreateCustomerResponse {
  success: boolean
  data: {
    id: string
    full_name: string
    phone_number: string
    organization_id: string
    environment: string
    email: string
    country: string
    group: string
    status: string
    created_at: string
    updated_at: string
    first_name: string
    last_name: string
    kyc_tier: string
    bvn: string
    date_of_birth: string
    customer_type: string
    source: string
    address: {
      street: string
    }
  }
  message: string
}
