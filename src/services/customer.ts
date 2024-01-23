import { HTTPCore } from '../api'
import { ICreateCustomer, ICreateCustomerResponse } from '../types'

export class Customer extends HTTPCore {
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async createCustomer(
    data: ICreateCustomer
  ): Promise<ICreateCustomerResponse> {
    return this.post<ICreateCustomerResponse>('/customers', data)
  }
}
