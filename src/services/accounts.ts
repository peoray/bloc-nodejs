import { HTTPCore } from '../api'
import { IAccountResponse, ICreateFixedAccountRequest } from '../types'

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
}
