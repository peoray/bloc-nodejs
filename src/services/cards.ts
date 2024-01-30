import { HTTPCore } from '../api'
import {
  IGetCardsResponse,
  IIssueCardRequest,
  ICardResponse,
  ICardSecureDataResponse,
  IChangeCardPinRequest,
  IBlockCardRequest,
  ILinkCardwithFixedAccountRequest,
  IFundCardRequest,
  IWithdrawFromCardRequest,
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

  /**
   * Issues a new card using the provided data.
   * @param {IIssueCardRequest} data - The data to issue a new card.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card issuance response.
   */
  public async issueCard(data: IIssueCardRequest): Promise<ICardResponse> {
    return this.post<ICardResponse>(`/cards`, data)
  }

  /**
   * Retrieves a list of cards.
   * @returns {Promise<IGetCardsResponse>} A promise that resolves to the list of cards response.
   */
  public async getCards(): Promise<IGetCardsResponse> {
    return this.get<IGetCardsResponse>(`/cards`)
  }

  /**
   * Retrieves a card by its ID.
   * @param {string} cardID - The ID of the card to retrieve.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async getCardById(cardID: string): Promise<ICardResponse> {
    return this.get<ICardResponse>(`/cards/${cardID}`)
  }

  /**
   * Retrieves cards associated with a customer.
   * @param {string} customerID - The ID of the customer to retrieve cards for.
   * @returns {Promise<ICardResponse>} A promise that resolves to the list of cards associated with the customer.
   */
  public async getCustomerCards(customerID: string): Promise<ICardResponse> {
    return this.get<ICardResponse>(`/cards/customer/${customerID}`)
  }

  /**
   * Retrieves secure data for a card.
   * @param {string} cardID - The ID of the card to retrieve secure data for.
   * @returns {Promise<ICardSecureDataResponse>} A promise that resolves to the card secure data response.
   */
  public async getCardSecureData(
    cardID: string
  ): Promise<ICardSecureDataResponse> {
    return this.get<ICardSecureDataResponse>(`/cards/secure-data/${cardID}`)
  }

  /**
   * Changes the PIN for a card.
   * @param {string} cardID - The ID of the card to change the PIN for.
   * @param {IChangeCardPinRequest} data - The data to change the card PIN.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async changeCardPIN(
    cardID: string,
    data: IChangeCardPinRequest
  ): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/change-pin/${cardID}`, data)
  }

  /**
   * Freezes a card.
   * @param {string} cardID - The ID of the card to freeze.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async freezeCard(cardID: string): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/freeze/${cardID}`)
  }

  /**
   * Unfreezes a card.
   * @param {string} cardID - The ID of the card to unfreeze.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async unfreezeCard(cardID: string): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/unfreeze/${cardID}`)
  }

  /**
   * Blocks a card.
   * @param {string} cardID - The ID of the card to block.
   * @param {IBlockCardRequest} data - The data to block the card.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async blockCard(
    cardID: string,
    data: IBlockCardRequest
  ): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/block/${cardID}`, data)
  }

  /**
   * Links a card with a fixed account.
   * @param {ILinkCardwithFixedAccountRequest} data - The data to link the card with a fixed account.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async linkCardwithFixedAccount(
    data: ILinkCardwithFixedAccountRequest
  ): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/fixed-account/link`, data)
  }

  /**
   * Unlinks a card from a fixed account.
   * @param {string} cardID - The ID of the card to unlink from the fixed account.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async unlinkCardwithFixedAccount(
    cardID: string
  ): Promise<ICardResponse> {
    return this.put<ICardResponse>(`/cards/fixed-account/unlink/${cardID}`)
  }

  /**
   * Funds a card with the provided data.
   * @param {string} cardID - The ID of the card to fund.
   * @param {IFundCardRequest} data - The data to fund the card.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async fundCard(
    cardID: string,
    data: IFundCardRequest
  ): Promise<ICardResponse> {
    return this.post<ICardResponse>(`/cards/fund/${cardID}`, data)
  }

  /**
   * Withdraws from a card with the provided data.
   * @param {string} cardID - The ID of the card to withdraw from.
   * @param {IWithdrawFromCardRequest} data - The data to withdraw from the card.
   * @returns {Promise<ICardResponse>} A promise that resolves to the card response.
   */
  public async withdrawFromCard(
    cardID: string,
    data: IWithdrawFromCardRequest
  ): Promise<ICardResponse> {
    return this.post<ICardResponse>(`/cards/withdraw/${cardID}`, data)
  }
}
