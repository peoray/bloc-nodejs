import { HTTPCore } from '../api'
import {} from '../types'
import { ICreatePaymentLinkRequest, ICreatePaymentLinkResponse } from '../types'

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
  ): Promise<ICreatePaymentLinkResponse> {
    return this.post<ICreatePaymentLinkResponse>(`/paymentlinks`, data)
  }
}
