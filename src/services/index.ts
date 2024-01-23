export * from './customer'

// services/ServiceManager.ts

import { Customer } from './customer'
import {
  ICreateCustomer,
  ICreateCustomerResponse /* Import other necessary types */,
} from '../types'

export class ServiceManager {
  private customer: Customer

  constructor(secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
  }

  // Add other service classes as needed

  // Example method for creating a customer
  public createCustomer(
    data: ICreateCustomer
  ): Promise<ICreateCustomerResponse> {
    return this.customer.createCustomer(data)
  }

  // You can add more methods for other services
}
