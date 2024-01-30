import { HTTPCore } from '../api'
import {
  IGetCardsResponse,
  IIssueCardRequest,
  ICardResponse,
  ICardSecureDataResponse,
  IChangeCardPinRequest,
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

  public async issueCard(data: IIssueCardRequest): Promise<ICardResponse> {
    return this.post<ICardResponse>(`/cards`, data)
  }

  public async getCards(): Promise<IGetCardsResponse> {
    return this.get<IGetCardsResponse>(`/cards`)
  }

  public async getCardById(cardID: string): Promise<ICardResponse> {
    return this.get<ICardResponse>(`/cards/${cardID}`)
  }

  public async getCustomerCards(customerID: string): Promise<ICardResponse> {
    return this.get<ICardResponse>(`/cards/customer/${customerID}`)
  }

  public async getCardSecureData(
    cardID: string
  ): Promise<ICardSecureDataResponse> {
    return this.get<ICardSecureDataResponse>(`/cards/secure-data/${cardID}`)
  }

  public async changeCardPIN(
    cardID: string,
    data: IChangeCardPinRequest
  ): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/change-pin/${cardID}`, data)
  }

  public async freezeCard(cardID: string): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/freeze/${cardID}`)
  }

  public async unfreezeCard(cardID: string): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/unfreeze/${cardID}`)
  }
}
