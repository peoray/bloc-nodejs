import { Customer } from './services'

export class Bloc {
  private customer: Customer = new Customer('', '')
  //   private serviceManager: ServiceManager = new ServiceManager('', '') //

  constructor(public secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
    // this.serviceManager = new ServiceManager(secretKey, publicKey)
  }

  public createCustomer = this.customer.createCustomer.bind(this.customer)
  //   public createCustomer = this.serviceManager.createCustomer.bind(
  //     this.serviceManager
  //   )
}
