import { HTTPCore } from '../api'
import {
  IGetCardsResponse,
  IIssueCardRequest,
  IIssueCardResponse,
} from '../types'

/**
 * Class representing operations related to Cards, extending HTTPCore.
 */
export class Cards extends HTTPCore {
  /**
   * Creates an instance of the Cards class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async issueCard(data: IIssueCardRequest): Promise<IIssueCardResponse> {
    return this.post<IIssueCardResponse>(`/cards`, data)
  }

  public async getCards(): Promise<IGetCardsResponse> {
    return this.get<IGetCardsResponse>(`/cards`)
  }
}
