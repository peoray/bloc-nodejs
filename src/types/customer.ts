interface IAddress {
  street: string
  city: string
  state: string
  country: string
  postal_code: string
}

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

interface ICustomer {
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
  kyc_status?: string
  bvn: string
  place_of_birth: string
  gender: string
  identity_url: string
  image_url: string
  means_of_identity: string
  date_of_birth: string
  means_of_identity_url: string
  customer_type: string
  source: string
  address: IAddress
}

export interface ICustomerResponse {
  success: boolean
  data: ICustomer[] | null
  message: string
  metadata: {
    has_next: boolean
    has_previous: boolean
  }
}

interface CustomerDetails {
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
  address: IAddress
}

export interface IGetCustomerByIdResponse {
  success: boolean
  data: CustomerDetails
  message: string
}

export interface IUpdateCustomer {
  email: string
  phone_number: string
  first_name: string
  last_name: string
  customer_type: string
  address: IAddress
}

export interface IUpdateCustomerResponse extends ICustomer {}
