import { Customer } from './services'

export class Bloc {
  private customer: Customer

  constructor(secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
  }

  public get createCustomer() {
    return this.customer.createCustomer.bind(this.customer)
  }
  public get getCustomers() {
    return this.customer.getCustomers.bind(this.customer)
  }
}
