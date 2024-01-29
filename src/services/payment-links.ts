import { HTTPCore } from '../api'
import {
  ICreatePaymentLinkRequest,
  IPaymentLinkResponse,
  IGetPaymentLinksResponse,
} from '../types'

/**
 * Class representing operations related to PaymentLinks, extending HTTPCore.
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

  public async createPaymentLink(
    data: ICreatePaymentLinkRequest
  ): Promise<IPaymentLinkResponse> {
    return this.post<IPaymentLinkResponse>(`/paymentlinks`, data)
  }

  public async getPaymentLinks(): Promise<IGetPaymentLinksResponse> {
    return this.get<IGetPaymentLinksResponse>(`/paymentlinks`)
  }

  public async getPaymentLinkById(
    linkId: string
  ): Promise<IPaymentLinkResponse> {
    return this.get<IPaymentLinkResponse>(`/paymentlinks/${linkId}`)
  }
}
