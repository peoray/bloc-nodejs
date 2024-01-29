import { HTTPCore } from '../api'
import {
  ICreatePaymentLinkRequest,
  IPaymentLinkResponse,
  IGetPaymentLinksResponse,
  IEditPaymentLinkRequest,
  IDeletePaymentLinksResponse,
  IDeletePaymentLinksRequest,
} from '../types'

/**
 * Class representing operations related to Payment Links, extending HTTPCore.
 */
export class PaymentLinks extends HTTPCore {
  /**
   * Creates an instance of the PaymentLinks class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Creates a new payment link using the provided data.
   * @param {ICreatePaymentLinkRequest} data - The data to create the payment link.
   * @returns {Promise<IPaymentLinkResponse>} A promise that resolves to the payment link creation response.
   */
  public async createPaymentLink(
    data: ICreatePaymentLinkRequest
  ): Promise<IPaymentLinkResponse> {
    return this.post<IPaymentLinkResponse>(`/paymentlinks`, data)
  }

  /**
   * Retrieves a list of payment links.
   * @returns {Promise<IGetPaymentLinksResponse>} A promise that resolves to the list of payment links response.
   */
  public async getPaymentLinks(): Promise<IGetPaymentLinksResponse> {
    return this.get<IGetPaymentLinksResponse>(`/paymentlinks`)
  }

  /**
   * Retrieves a payment link by its ID.
   * @param {string} linkId - The ID of the payment link to retrieve.
   * @returns {Promise<IPaymentLinkResponse>} A promise that resolves to the payment link response.
   */
  public async getPaymentLinkById(
    linkId: string
  ): Promise<IPaymentLinkResponse> {
    return this.get<IPaymentLinkResponse>(`/paymentlinks/${linkId}`)
  }

  /**
   * Edits an existing payment link using the provided data.
   * @param {string} linkId - The ID of the payment link to edit.
   * @param {IEditPaymentLinkRequest} data - The data to edit the payment link.
   * @returns {Promise<IPaymentLinkResponse>} A promise that resolves to the edited payment link response.
   */
  public async editPaymentLink(
    linkId: string,
    data: IEditPaymentLinkRequest
  ): Promise<IPaymentLinkResponse> {
    return this.put<IPaymentLinkResponse>(`/paymentlinks/${linkId}`, data)
  }

  /**
   * Deletes one or more payment links using the provided data.
   * @param {IDeletePaymentLinksRequest} data - The data to delete the payment links.
   * @returns {Promise<IDeletePaymentLinksResponse>} A promise that resolves to the payment link deletion response.
   */
  public async deletePaymentLink(
    data: IDeletePaymentLinksRequest
  ): Promise<IDeletePaymentLinksResponse> {
    return this.delete<IDeletePaymentLinksResponse>(`/paymentlinks`, { data })
  }
}
