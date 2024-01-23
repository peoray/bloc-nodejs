import { HTTPCore } from '../api'
import {
  ICreateCustomer,
  ICreateCustomerResponse,
  ICustomerResponse,
  IGetCustomerByIdResponse,
} from '../types'

export class Customer extends HTTPCore {
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getCustomers(): Promise<ICustomerResponse> {
    return this.get<ICustomerResponse>('/customers')
  }

  public async createCustomer(
    data: ICreateCustomer
  ): Promise<ICreateCustomerResponse> {
    return this.post<ICreateCustomerResponse>('/customers', data)
  }

  public async getCustomerById(
    customerID: string
  ): Promise<IGetCustomerByIdResponse> {
    return this.get<IGetCustomerByIdResponse>(`/customers/${customerID}`)
  }
}
