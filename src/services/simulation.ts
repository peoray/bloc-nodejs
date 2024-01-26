import { HTTPCore } from '../api'
import {
  ISimulationAccount,
  ICreditAccountResponse,
  IDebitAccountResponse,
} from '../types'

/**
 * Class representing operations related to Simulations, extending HTTPCore.
 */
export class Simulation extends HTTPCore {
  /**
   * Creates an instance of the Simulation class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Simulates crediting an account using the provided data.
   * @param {ISimulationAccount} data - The data to simulate the credit operation.
   * @returns {Promise<ICreditAccountResponse>} A promise that resolves to the credit account response.
   */
  public async creditAccount(
    data: ISimulationAccount
  ): Promise<ICreditAccountResponse> {
    return this.post<ICreditAccountResponse>(`/accounts/credit/manual`, data)
  }

  /**
   * Simulates debiting an account using the provided data.
   * @param {ISimulationAccount} data - The data to simulate the debit operation.
   * @returns {Promise<IDebitAccountResponse>} A promise that resolves to the debit account response.
   */
  public async debitAccount(
    data: ISimulationAccount
  ): Promise<IDebitAccountResponse> {
    return this.post<IDebitAccountResponse>(`/accounts/debit/manual`, data)
  }
}
