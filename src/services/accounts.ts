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

  public async createFixedAccount(
    data: ICreateFixedAccountRequest
  ): Promise<IAccountResponse> {
    return this.post<IAccountResponse>(`/accounts`, data)
  }

  public async createCollectionAccount(
    data: ICreateCollectionAccountRequest
  ): Promise<ICreateCollectionAccountResponse> {
    return this.post<ICreateCollectionAccountResponse>(
      `/accounts/collections`,
      data
    )
  }

  public async getAccounts(): Promise<IGetAccountsResponse> {
    return this.get<IGetAccountsResponse>(`/accounts`)
  }

  public async getAccountById(accountID: string): Promise<IAccountResponse> {
    return this.get<IAccountResponse>(`/accounts/${accountID}`)
  }

  public async getCollectionAccount(): Promise<IGetCollectionAccountResponse> {
    return this.get<IGetCollectionAccountResponse>(`/accounts/collections`)
  }

  public async getAccountByAccountNumber(
    accountNumber: string
  ): Promise<IAccountResponse> {
    return this.get<IAccountResponse>(`/accounts/number/${accountNumber}`)
  }

  public async getcustomerAccounts(
    customerID: string
  ): Promise<IGetAccountsResponse> {
    return this.get<IGetAccountsResponse>(
      `/accounts/customers/accounts/${customerID}`
    )
  }

  public async getOrganisationDefaultAccounts(): Promise<
    IGetOrganisationDefaultAccountsResponse
  > {
    return this.get<IGetOrganisationDefaultAccountsResponse>(
      `/accounts/organization/default`
    )
  }

  public async freezeAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/freeze`,
      data
    )
  }

  public async unfreezeAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/unfreeze`,
      data
    )
  }

  public async closeAccount(
    accountID: string,
    data: IUpdateAccountRequest
  ): Promise<IUpdateAccountResponse> {
    return this.put<IUpdateAccountResponse>(
      `/accounts/${accountID}/close`,
      data
    )
  }
}
