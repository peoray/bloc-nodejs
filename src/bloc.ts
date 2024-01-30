import {
  Customer,
  Beneficiary,
  Webhook,
  Checkout,
  Simulation,
  Transaction,
  Miscellaneous,
  Wallet,
  BillsPayments,
  Disputes,
  Transfers,
  PaymentLinks,
  Accounts,
  Cards,
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
  private billsPayments: BillsPayments
  private disputes: Disputes
  private transfers: Transfers
  private paymentLinks: PaymentLinks
  private accounts: Accounts
  private cards: Cards

  constructor(secretKey: string, publicKey: string) {
    this.customer = new Customer(secretKey, publicKey)
    this.beneficiary = new Beneficiary(secretKey, publicKey)
    this.transaction = new Transaction(secretKey, publicKey)
    this.webhook = new Webhook(secretKey, publicKey)
    this.checkout = new Checkout(secretKey, publicKey)
    this.simulation = new Simulation(secretKey, publicKey)
    this.miscellaneous = new Miscellaneous(secretKey, publicKey)
    this.wallet = new Wallet(secretKey, publicKey)
    this.billsPayments = new BillsPayments(secretKey, publicKey)
    this.disputes = new Disputes(secretKey, publicKey)
    this.transfers = new Transfers(secretKey, publicKey)
    this.paymentLinks = new PaymentLinks(secretKey, publicKey)
    this.accounts = new Accounts(secretKey, publicKey)
    this.cards = new Cards(secretKey, publicKey)
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
  public get getSupportedBills() {
    return this.billsPayments.getSupportedBills.bind(this.billsPayments)
  }
  public get getSupportedOperators() {
    return this.billsPayments.getSupportedOperators.bind(this.billsPayments)
  }
  public get getOperatorProducts() {
    return this.billsPayments.getOperatorProducts.bind(this.billsPayments)
  }
  public get customerDeviceValidation() {
    return this.billsPayments.customerDeviceValidation.bind(this.billsPayments)
  }
  public get makePayment() {
    return this.billsPayments.makePayment.bind(this.billsPayments)
  }
  public get getCardDisputeReasons() {
    return this.disputes.getCardDisputeReasons.bind(this.disputes)
  }
  public get createCardDispute() {
    return this.disputes.createCardDispute.bind(this.disputes)
  }
  public get getCardDisputes() {
    return this.disputes.getCardDisputes.bind(this.disputes)
  }
  public get getCardDisputeById() {
    return this.disputes.getCardDisputeById.bind(this.disputes)
  }
  public get updateCardDispute() {
    return this.disputes.updateCardDispute.bind(this.disputes)
  }
  public get transferFromAFixedAccount() {
    return this.transfers.transferFromAFixedAccount.bind(this.transfers)
  }
  public get transferFromOrganizationBalance() {
    return this.transfers.transferFromOrganizationBalance.bind(this.transfers)
  }
  public get internalTransfer() {
    return this.transfers.internalTransfer.bind(this.transfers)
  }
  public get bulkTransfer() {
    return this.transfers.bulkTransfer.bind(this.transfers)
  }
  public get createPaymentLink() {
    return this.paymentLinks.createPaymentLink.bind(this.paymentLinks)
  }
  public get getPaymentLinks() {
    return this.paymentLinks.getPaymentLinks.bind(this.paymentLinks)
  }
  public get getPaymentLinkById() {
    return this.paymentLinks.getPaymentLinkById.bind(this.paymentLinks)
  }
  public get editPaymentLink() {
    return this.paymentLinks.editPaymentLink.bind(this.paymentLinks)
  }
  public get deletePaymentLink() {
    return this.paymentLinks.deletePaymentLink.bind(this.paymentLinks)
  }
  public get createFixedAccount() {
    return this.accounts.createFixedAccount.bind(this.accounts)
  }
  public get createCollectionAccount() {
    return this.accounts.createCollectionAccount.bind(this.accounts)
  }
  public get getAccounts() {
    return this.accounts.getAccounts.bind(this.accounts)
  }
  public get getAccountById() {
    return this.accounts.getAccountById.bind(this.accounts)
  }
  public get getCollectionAccount() {
    return this.accounts.getCollectionAccount.bind(this.accounts)
  }
  public get getAccountByAccountNumber() {
    return this.accounts.getAccountByAccountNumber.bind(this.accounts)
  }
  public get getCustomerAccounts() {
    return this.accounts.getCustomerAccounts.bind(this.accounts)
  }
  public get getOrganisationDefaultAccounts() {
    return this.accounts.getOrganisationDefaultAccounts.bind(this.accounts)
  }
  public get freezeAccount() {
    return this.accounts.freezeAccount.bind(this.accounts)
  }
  public get unfreezeAccount() {
    return this.accounts.unfreezeAccount.bind(this.accounts)
  }
  public get closeAccount() {
    return this.accounts.closeAccount.bind(this.accounts)
  }
  public get reopenAccount() {
    return this.accounts.reopenAccount.bind(this.accounts)
  }
  public get issueCard() {
    return this.cards.issueCard.bind(this.cards)
  }
  public get getCards() {
    return this.cards.getCards.bind(this.cards)
  }
  public get getCardById() {
    return this.cards.getCardById.bind(this.cards)
  }
  public get getCustomerCards() {
    return this.cards.getCustomerCards.bind(this.cards)
  }
  public get getCardSecureData() {
    return this.cards.getCardSecureData.bind(this.cards)
  }
  public get changeCardPIN() {
    return this.cards.changeCardPIN.bind(this.cards)
  }
  public get freezeCard() {
    return this.cards.freezeCard.bind(this.cards)
  }
  public get unfreezeCard() {
    return this.cards.unfreezeCard.bind(this.cards)
  }
  public get blockCard() {
    return this.cards.blockCard.bind(this.cards)
  }
  public get linkCardwithFixedAccount() {
    return this.cards.linkCardwithFixedAccount.bind(this.cards)
  }
  public get unlinkCardwithFixedAccount() {
    return this.cards.unlinkCardwithFixedAccount.bind(this.cards)
  }
  public get fundCard() {
    return this.cards.fundCard.bind(this.cards)
  }
  public get withdrawFromCard() {
    return this.cards.withdrawFromCard.bind(this.cards)
  }
}
