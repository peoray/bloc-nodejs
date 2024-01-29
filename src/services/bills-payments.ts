import { HTTPCore } from '../api'
import {
  IQueryParams,
  ISupportedBillsResponse,
  ISupportedOperatorsResponse,
} from '../types'

/**
 * Class representing operations related to BillsPayments, extending HTTPCore.
 */
export class BillsPayments extends HTTPCore {
  /**
   * Creates an instance of the BillsPayments class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getSupportedBills(): Promise<ISupportedBillsResponse> {
    return this.get<ISupportedBillsResponse>(`/bills/supported`)
  }

  public async getSupportedOperators(
    params?: IQueryParams
  ): Promise<ISupportedOperatorsResponse> {
    return this.get<ISupportedOperatorsResponse>(`/bills/operators`, { params })
  }
}
