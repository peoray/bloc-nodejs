interface IAddress {
  street: string
  city: string
  state: string
  country: string
  postal_code: string
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
  date_of_birth: string
  customer_type: string
  source: string
  address: IAddress
}

interface ICustomerExtended extends ICustomer {
  kyc_status: string
  bvn: string
  place_of_birth: string
  gender: string
  identity_url: string
  image_url: string
  means_of_identity: string
  means_of_identity_url: string
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
  data: ICustomer & { bvn: string }
  message: string
}

export interface IGetCustomerResponse {
  success: boolean
  data: ICustomerExtended[] | null
  message: string
  metadata: {
    has_next: boolean
    has_previous: boolean
  }
}

export interface IGetCustomerByIdResponse {
  success: boolean
  data: ICustomer
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

export interface IMeansOfIdentification {
  success: boolean
  data: {
    name: string
    format: string
  }[]
  message: string
}

export interface IRevalidateCustomerKYCResponse {
  success: boolean
  message: string
}

export interface IUpgradeCustomerToKYCT1 {
  place_of_birth: string
  dob: string
  gender: string
  country: string
  address: IAddress
  image: string
}

export interface IUpgradeCustomerToKYCT2 {
  means_of_id: string
  image: string
}

export interface IUpgradeCustomerToKYCT3 {
  image: string
}

export interface IUpgradeCustomerToKYCTierResponse extends ICustomer {
  kyc_status: string
  bvn: string
  image_url: string
}
export interface IUpgradeCustomerToKYCTierResponse
  extends Omit<
    ICustomerExtended,
    'identity_url' | 'means_of_identity' | 'means_of_identity_url'
  > {}
