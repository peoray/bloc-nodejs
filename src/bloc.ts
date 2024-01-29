import {
  Customer,
  Beneficiary,
  Webhook,
  Checkout,
  Simulation,
  Transaction,
  Miscellaneous,
  Wallet,
} from './services'

export class Bloc {
  private customer: Customer
  private beneficiary: Beneficiary
  private transaction: Transaction
  private webhook: Webhook
  private checkout: Checkout
  private simulation: Simulation
  private miscellaneous: Miscellaneous
  private wallet: Wallet

  constructor(secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
    this.beneficiary = new Beneficiary(secretKey, publicKey)
    this.transaction = new Transaction(secretKey, publicKey)
    this.webhook = new Webhook(secretKey, publicKey)
    this.checkout = new Checkout(secretKey, publicKey)
    this.simulation = new Simulation(secretKey, publicKey)
    this.miscellaneous = new Miscellaneous(secretKey, publicKey)
    this.wallet = new Wallet(secretKey, publicKey)
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
  public get getAllTransactions() {
    return this.transaction.getAllTransactions.bind(this.transaction)
  }
  public get getTransactionByReference() {
    return this.transaction.getTransactionByReference.bind(this.transaction)
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
  public get getListOfBanks() {
    return this.miscellaneous.getListOfBanks.bind(this.miscellaneous)
  }
  public get resolveAccount() {
    return this.miscellaneous.resolveAccount.bind(this.miscellaneous)
  }
  public get getExchangeRate() {
    return this.miscellaneous.getExchangeRate.bind(this.miscellaneous)
  }
  public get createWallet() {
    return this.wallet.createWallet.bind(this.wallet)
  }
  public get getWallets() {
    return this.wallet.getWallets.bind(this.wallet)
  }
  public get getWalletById() {
    return this.wallet.getWalletById.bind(this.wallet)
  }
  public get getCustomerWallets() {
    return this.wallet.getCustomerWallets.bind(this.wallet)
  }
  public get debitWallet() {
    return this.wallet.debitWallet.bind(this.wallet)
  }
}
