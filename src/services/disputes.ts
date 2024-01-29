import { HTTPCore } from '../api'
import {
  ICreateCardDisputeRequest,
  ICreateCardDisputeResponse,
  IGetCardDisputeReasonsResponse,
  IGetCardDisputesResponse,
} from '../types'

/**
 * Class representing operations related to Disputes, extending HTTPCore.
 */
export class Disputes extends HTTPCore {
  /**
   * Creates an instance of the Disputes class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getCardDisputeReasons(): Promise<
    IGetCardDisputeReasonsResponse
  > {
    return this.get<IGetCardDisputeReasonsResponse>(`/cards/dispute/reasons`)
  }

  public async createCardDispute(
    data: ICreateCardDisputeRequest
  ): Promise<ICreateCardDisputeResponse> {
    return this.post<ICreateCardDisputeResponse>(`/cards/dispute`, data)
  }

  public async getCardDisputes(): Promise<IGetCardDisputesResponse> {
    return this.get<IGetCardDisputesResponse>(`/cards/dispute`)
  }
}
