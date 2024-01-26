import { HTTPCore } from '../api'
import { ISetWebhook, IWebhookResponse } from '../types'
import {} from '../types'

/**
 * Class representing Customer operations that extends HTTPCore.
 */
export class Webhhok extends HTTPCore {
  /**
   * Creates an instance of the Webhhok class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }
  public async setWebhook(data: ISetWebhook): Promise<IWebhookResponse> {
    return this.post<IWebhookResponse>(`/webhooks`, data)
  }
}
