import { HTTPCore } from '../api'
import {
  ITransactionResponse,
  ITransactionByReferenceResponse,
  IQueryParams,
} from '../types'

/**
 * Class representing Customer operations that extends HTTPCore.
 */
export class Transaction extends HTTPCore {
  /**
   * Creates an instance of the Beneficiary class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getAllTransactions(
    params?: IQueryParams
  ): Promise<ITransactionResponse> {
    return this.get<ITransactionResponse>(`/transactions`, { params })
  }

  public async getTransactionByReference(
    reference: string
  ): Promise<ITransactionByReferenceResponse> {
    return this.get<ITransactionByReferenceResponse>(
      `/transactions/reference/${reference}`
    )
  }
}
