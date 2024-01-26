import { HTTPCore } from '../api'
import { ICreditAccount, ICreditAccountResponse } from '../types'

/**
 * Class representing operations related to Webhooks, extending HTTPCore.
 */
export class Simulation extends HTTPCore {
  /**
   * Creates an instance of the Webhook class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async creditAccount(
    data: ICreditAccount
  ): Promise<ICreditAccountResponse> {
    return this.post<ICreditAccountResponse>(`/accounts/credit/manual`, data)
  }
}
