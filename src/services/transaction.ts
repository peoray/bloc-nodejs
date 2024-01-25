import { HTTPCore } from '../api'
import {} from '../types'
import { IQueryParams } from '../types/base'
import { ITransactionResponse } from '../types'

/**
 * Class representing Customer operations that extends HTTPCore.
 */
export class Beneficiary extends HTTPCore {
  /**
   * Creates an instance of the Beneficiary class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getAllTransactions(
    params: IQueryParams
  ): Promise<ITransactionResponse> {
    return this.get<ITransactionResponse>(`/transactions`, { params })
  }
}
