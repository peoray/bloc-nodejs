import { HTTPCore } from '../api'
import { ISetWebhook, IWebhookResponse } from '../types'

/**
 * Class representing operations related to Webhooks, extending HTTPCore.
 */
export class Webhook extends HTTPCore {
  /**
   * Creates an instance of the Webhook class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Sets a webhook using the provided data.
   * @param {ISetWebhook} data - The data to set the webhook.
   * @returns {Promise<IWebhookResponse>} A promise that resolves to the webhook response.
   */
  public async setWebhook(data: ISetWebhook): Promise<IWebhookResponse> {
    return this.post<IWebhookResponse>(`/webhooks`, data)
  }

  /**
   * Retrieves the current webhook configuration.
   * @returns {Promise<IWebhookResponse>} A promise that resolves to the webhook response.
   */
  public async getWebhook(): Promise<IWebhookResponse> {
    return this.get<IWebhookResponse>(`/webhooks`)
  }
}
