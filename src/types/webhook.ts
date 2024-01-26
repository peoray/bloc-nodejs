export interface ISetWebhook {
  url: string
}

export interface IWebhookResponse {
  success: boolean
  data: {
    organization_id: string
    environment: string
    url: string
    portal_url: string
    secret_key: string
  }
  message: string
}
