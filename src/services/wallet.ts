import { HTTPCore } from '../api'
import {
  IGetCustomerWalletResponse,
  IGetWalletResponse,
  IWallet,
  IWalletResponse,
} from '../types'

/**
 * Class representing Customer operations that extends HTTPCore.
 */
export class Wallet extends HTTPCore {
  /**
   * Creates an instance of the Beneficiary class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async createWallet(data: IWallet): Promise<IWalletResponse> {
    return this.post<IWalletResponse>(`/wallets`, data)
  }

  public async getWallets(): Promise<IGetWalletResponse> {
    return this.get<IGetWalletResponse>(`/wallets`)
  }

  public async getWalletById(walletID: string): Promise<IWalletResponse> {
    return this.get<IWalletResponse>(`/wallets/${walletID}`)
  }

  public async getCustomerWallets(
    customerID: string
  ): Promise<IGetCustomerWalletResponse> {
    return this.get<IGetCustomerWalletResponse>(
      `/wallets/customers/${customerID}`
    )
  }
}
