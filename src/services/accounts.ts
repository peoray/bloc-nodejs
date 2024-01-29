import { HTTPCore } from '../api'
import {
  IAccountResponse,
  ICreateCollectionAccountRequest,
  ICreateCollectionAccountResponse,
  ICreateFixedAccountRequest,
  IUpdateAccountRequest,
  IUpdateAccountResponse,
  IGetAccountsResponse,
  IGetCollectionAccountResponse,
  IGetOrganisationDefaultAccountsResponse,
} from '../types'

/**
 * Class representing operations related to Accounts, extending HTTPCore.
 */
export class Accounts extends HTTPCore {
  /**
   * Creates an instance of the Accounts class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Creates a new fixed account using the provided data.
   * @param {ICreateFixedAccountRequest} data - The data to create the fixed account.
   * @returns {Promise<IAccountResponse>} A promise that resolves to the fixed account creation response.
   */
  public async createFixedAccount(
    data: ICreateFixedAccountRequest
  ): Promise<IAccountResponse> {
    return this.post<IAccountResponse>(`/accounts`, data)
  }

  /**
   * Creates a new collection account using the provided data.
   * @param {ICreateCollectionAccountRequest} data - The data to create the collection account.
   * @returns {Promise<ICreateCollectionAccountResponse>} A promise that resolves to the collection account creation response.
   */
  public async createCollectionAccount(
    data: ICreateCollectionAccountRequest
  ): Promise<ICreateCollectionAccountResponse> {
    return this.post<ICreateCollectionAccountResponse>(
      `/accounts/collections`,
      data
    )
  }

  /**
   * Retrieves a list of accounts.
   * @returns {Promise<IGetAccountsResponse>} A promise that resolves to the list of accounts response.
   */
  public async getAccounts(): Promise<IGetAccountsResponse> {
    return this.get<IGetAccountsResponse>(`/accounts`)
  }

  /**
   * Retrieves an account by its ID.
   * @param {string} accountID - The ID of the account to retrieve.
   * @returns {Promise<IAccountResponse>} A promise that resolves to the account response.
   */
  public async getAccountById(accountID: string): Promise<IAccountResponse> {
    return this.get<IAccountResponse>(`/accounts/${accountID}`)
  }

  /**
   * Retrieves a collection account.
   * @returns {Promise<IGetCollectionAccountResponse>} A promise that resolves to the collection account response.
   */
  public async getCollectionAccount(): Promise<IGetCollectionAccountResponse> {
    return this.get<IGetCollectionAccountResponse>(`/accounts/collections`)
  }

  /**
   * Retrieves an account by its account number.
   * @param {string} accountNumber - The account number to retrieve.
   * @returns {Promise<IAccountResponse>} A promise that resolves to the account response.
   */
  public async getAccountByAccountNumber(
    accountNumber: string
  ): Promise<IAccountResponse> {
    return this.get<IAccountResponse>(`/accounts/number/${accountNumber}`)
  }

  /**
   * Retrieves accounts associated with a customer.
   * @param {string} customerID - The ID of the customer to retrieve accounts for.
   * @returns {Promise<IGetAccountsResponse>} A promise that resolves to the list of accounts associated with the customer.
   */
  public async getCustomerAccounts(
    customerID: string
  ): Promise<IGetAccountsResponse> {
    return this.get<IGetAccountsResponse>(
      `/accounts/customers/accounts/${customerID}`
    )
  }

  /**
   * Retrieves organization default accounts.
   * @returns {Promise<IGetOrganisationDefaultAccountsResponse>} A promise that resolves to the organization default accounts response.
   */
  public async getOrganisationDefaultAccounts(): Promise<
    IGetOrganisationDefaultAccountsResponse
  > {
    return this.get<IGetOrganisationDefaultAccountsResponse>(
      `/accounts/organization/default`
    )
  }

  /**
   * Freezes an account.
   * @param {string} accountID - The ID of the account to freeze.
   * @param {IUpdateAccountRequest} data - The data to freeze the account.
   * @returns {Promise<IUpdateAccountResponse>} A promise that resolves to the account update response.
   */
  public async freezeAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/freeze`,
      data
    )
  }

  /**
   * Unfreezes an account.
   * @param {string} accountID - The ID of the account to unfreeze.
   * @param {IUpdateAccountRequest} data - The data to unfreeze the account.
   * @returns {Promise<IUpdateAccountResponse>} A promise that resolves to the account update response.
   */
  public async unfreezeAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/unfreeze`,
      data
    )
  }

  /**
   * Closes an account.
   * @param {string} accountID - The ID of the account to close.
   * @param {IUpdateAccountRequest} data - The data to close the account.
   * @returns {Promise<IUpdateAccountResponse>} A promise that resolves to the account update response.
   */
  public async closeAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/close`,
      data
    )
  }

  /**
   * Reopens a closed account.
   * @param {string} accountID - The ID of the account to reopen.
   * @param {IUpdateAccountRequest} data - The data to reopen the account.
   * @returns {Promise<IUpdateAccountResponse>} A promise that resolves to the account update response.
   */
  public async reopenAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/reopen`,
      data
    )
  }
}
