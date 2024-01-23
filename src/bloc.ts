import { Customer } from './services'

export class Bloc {
  private customer: Customer

  constructor(public secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
  }

  public get createCustomer() {
    return this.customer.createCustomer.bind(this.customer)
  }
}
