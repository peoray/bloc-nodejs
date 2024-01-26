import { HTTPCore } from '../api'
import {
  ISimulationAccount,
  ICreditAccountResponse,
  IDebitAccountResponse,
} from '../types'

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
    data: ISimulationAccount
  ): Promise<ICreditAccountResponse> {
    return this.post<ICreditAccountResponse>(`/accounts/credit/manual`, data)
  }

  public async debitAccount(
    data: ISimulationAccount
  ): Promise<IDebitAccountResponse> {
    return this.post<IDebitAccountResponse>(`/accounts/debit/manual`, data)
  }
}
