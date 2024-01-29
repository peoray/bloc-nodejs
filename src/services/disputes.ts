import { HTTPCore } from '../api'
import {
  ICardDisputeResponse,
  ICreateCardDisputeRequest,
  IGetCardDisputeReasonsResponse,
  IGetCardDisputesResponse,
  IUpdateCardDisputeRequest,
} from '../types'

/**
 * Class representing operations related to Card Disputes, extending HTTPCore.
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

  /**
   * Retrieves the reasons for card disputes.
   * @returns {Promise<IGetCardDisputeReasonsResponse>} A promise that resolves to the card dispute reasons response.
   */
  public async getCardDisputeReasons(): Promise<
    IGetCardDisputeReasonsResponse
  > {
    return this.get<IGetCardDisputeReasonsResponse>(`/cards/dispute/reasons`)
  }

  /**
   * Creates a new card dispute using the provided data.
   * @param {ICreateCardDisputeRequest} data - The data to create the card dispute.
   * @returns {Promise<ICardDisputeResponse>} A promise that resolves to the card dispute creation response.
   */
  public async createCardDispute(
    data: ICreateCardDisputeRequest
  ): Promise<ICardDisputeResponse> {
    return this.post<ICardDisputeResponse>(`/cards/dispute`, data)
  }

  /**
   * Retrieves the list of card disputes.
   * @returns {Promise<IGetCardDisputesResponse>} A promise that resolves to the list of card disputes response.
   */
  public async getCardDisputes(): Promise<IGetCardDisputesResponse> {
    return this.get<IGetCardDisputesResponse>(`/cards/dispute`)
  }

  /**
   * Retrieves a card dispute by its ID.
   * @param {string} disputeID - The ID of the card dispute to retrieve.
   * @returns {Promise<ICardDisputeResponse>} A promise that resolves to the card dispute response.
   */
  public async getCardDisputeById(
    disputeID: string
  ): Promise<ICardDisputeResponse> {
    return this.get<ICardDisputeResponse>(`/cards/dispute/${disputeID}`)
  }

  /**
   * Updates a card dispute using the provided data.
   * @param {string} disputeID - The ID of the card dispute to update.
   * @param {IUpdateCardDisputeRequest} data - The data to update the card dispute.
   * @returns {Promise<ICardDisputeResponse>} A promise that resolves to the updated card dispute response.
   */
  public async updateCardDispute(
    disputeID: string,
    data: IUpdateCardDisputeRequest
  ): Promise<ICardDisputeResponse> {
    return this.put<ICardDisputeResponse>(`/cards/dispute/${disputeID}`, data)
  }
}
