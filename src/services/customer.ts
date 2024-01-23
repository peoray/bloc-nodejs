import { HTTPCore } from '../api'
import {
  ICreateCustomer,
  ICreateCustomerResponse,
  ICustomerResponse,
  IGetCustomerByIdResponse,
  IMeansOfIdentification,
  IUpdateCustomer,
  IUpdateCustomerResponse,
} from '../types'

export class Customer extends HTTPCore {
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getCustomers(): Promise<ICustomerResponse> {
    return this.get<ICustomerResponse>(`/customers`)
  }

  public async meansOfIdentification(): Promise<IMeansOfIdentification> {
    return this.get<IMeansOfIdentification>(`/customers`)
  }

  public async getCustomerById(
    customerID: string
  ): Promise<IGetCustomerByIdResponse> {
    return this.get<IGetCustomerByIdResponse>(`/customers/${customerID}`)
  }

  public async createCustomer(
    data: ICreateCustomer
  ): Promise<ICreateCustomerResponse> {
    return this.post<ICreateCustomerResponse>(`/customers`, data)
  }

  public async updateCustomer(
    customerID: string,
    data: IUpdateCustomer
  ): Promise<IUpdateCustomerResponse> {
    return this.put<IUpdateCustomerResponse>(`/customers/${customerID}`, data)
  }
}
