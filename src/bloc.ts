import { Customer, Beneficiary, Webhhok } from './services'

export class Bloc {
  private customer: Customer
  private beneficiary: Beneficiary
  private webhook: Webhhok

  constructor(secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
    this.beneficiary = new Beneficiary(secretKey, publicKey)
    this.webhook = new Webhhok(secretKey, publicKey)
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
}
