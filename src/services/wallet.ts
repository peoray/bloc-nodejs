import { HTTPCore } from '../api'
import {
  IDebitWallet,
  IGetCustomerWalletResponse,
  IGetWalletResponse,
  IWallet,
  IWalletResponse,
} from '../types'

/**
 * Class representing operations related to Wallets, extending HTTPCore.
 */
export class Wallet extends HTTPCore {
  /**
   * Creates an instance of the Wallet class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Creates a new wallet using the provided data.
   * @param {IWallet} data - The data to create the wallet.
   * @returns {Promise<IWalletResponse>} A promise that resolves to the wallet creation response.
   */
  public async createWallet(data: IWallet): Promise<IWalletResponse> {
    return this.post<IWalletResponse>(`/wallets`, data)
  }

  /**
   * Retrieves a list of wallets.
   * @returns {Promise<IGetWalletResponse>} A promise that resolves to the list of wallets response.
   */
  public async getWallets(): Promise<IGetWalletResponse> {
    return this.get<IGetWalletResponse>(`/wallets`)
  }

  /**
   * Retrieves a wallet by its ID.
   * @param {string} walletID - The ID of the wallet to retrieve.
   * @returns {Promise<IWalletResponse>} A promise that resolves to the wallet response.
   */
  public async getWalletById(walletID: string): Promise<IWalletResponse> {
    return this.get<IWalletResponse>(`/wallets/${walletID}`)
  }

  /**
   * Retrieves the wallets associated with a specific customer.
   * @param {string} customerID - The ID of the customer to retrieve wallets for.
   * @returns {Promise<IGetCustomerWalletResponse>} A promise that resolves to the customer's wallets response.
   */
  public async getCustomerWallets(
    customerID: string
  ): Promise<IGetCustomerWalletResponse> {
    return this.get<IGetCustomerWalletResponse>(
      `/wallets/customers/${customerID}`
    )
  }

  /**
   * Simulates debiting a wallet using the provided data.
   * @param {IDebitWallet} data - The data to simulate the debit operation.
   * @returns {Promise<IGetCustomerWalletResponse>} A promise that resolves to the customer's wallets response after the debit operation.
   */
  public async debitWallet(
    data: IDebitWallet
  ): Promise<IGetCustomerWalletResponse> {
    return this.post<IGetCustomerWalletResponse>(`/wallets/debit/manual`, data)
  }
}
