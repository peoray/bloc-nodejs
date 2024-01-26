import { HTTPCore } from '../api'
import { ICheckoutResponse, ICreateCheckout } from '../types'

/**
 * Class representing operations related to Checkouts, extending HTTPCore.
 */
export class Checkout extends HTTPCore {
  /**
   * Creates an instance of the Webhook class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async createCheckout(
    data: ICreateCheckout
  ): Promise<ICheckoutResponse> {
    return this.post<ICheckoutResponse>(`/checkout/new`, data)
  }
}
