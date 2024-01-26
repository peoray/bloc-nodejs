import {
  Customer,
  Beneficiary,
  Webhook,
  Checkout,
  Simulation,
} from './services'

export class Bloc {
  private customer: Customer
  private beneficiary: Beneficiary
  private webhook: Webhook
  private checkout: Checkout
  private simulation: Simulation

  constructor(secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
    this.beneficiary = new Beneficiary(secretKey, publicKey)
    this.webhook = new Webhook(secretKey, publicKey)
    this.checkout = new Checkout(secretKey, publicKey)
    this.simulation = new Simulation(secretKey, publicKey)
  }

  public get createCustomer() {
    return this.customer.createCustomer.bind(this.customer)
  }
  public get getCustomers() {
    return this.customer.getCustomers.bind(this.customer)
  }
  public get meansOfIdentification() {
    return this.customer.meansOfIdentification.bind(this.customer)
  }
  public get revalidateCustomerKYC() {
    return this.customer.revalidateCustomerKYC.bind(this.customer)
  }
  public get getCustomerById() {
    return this.customer.getCustomerById.bind(this.customer)
  }
  public get updateCustomer() {
    return this.customer.updateCustomer.bind(this.customer)
  }
  public get upgradeCustomerToKYCT1() {
    return this.customer.upgradeCustomerToKYCT1.bind(this.customer)
  }
  public get upgradeCustomerToKYCT2() {
    return this.customer.upgradeCustomerToKYCT2.bind(this.customer)
  }
  public get upgradeCustomerToKYCT3() {
    return this.customer.upgradeCustomerToKYCT3.bind(this.customer)
  }
  public get createBeneficiary() {
    return this.beneficiary.createBeneficiary.bind(this.beneficiary)
  }
  public get getBeneficiaryById() {
    return this.beneficiary.getBeneficiaryById.bind(this.beneficiary)
  }
  public get updateBeneficiary() {
    return this.beneficiary.updateBeneficiary.bind(this.beneficiary)
  }
  public get deleteBeneficiary() {
    return this.beneficiary.deleteBeneficiary.bind(this.beneficiary)
  }
  public get setWebhook() {
    return this.webhook.setWebhook.bind(this.webhook)
  }
  public get getWebhook() {
    return this.webhook.getWebhook.bind(this.webhook)
  }
  public get createCheckout() {
    return this.checkout.createCheckout.bind(this.checkout)
  }
  public get creditAccount() {
    return this.simulation.creditAccount.bind(this.simulation)
  }
  public get debitAccount() {
    return this.simulation.debitAccount.bind(this.simulation)
  }
}
