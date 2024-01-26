import { Bloc, ISetWebhook } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const setWebhook = async () => {
  try {
    const data: ISetWebhook = {
      url: 'https://4119-105-112-189-13.eu.ngrok.io/api/core/guest/webhook',
    }
    const beneficiaries = await bloc.setWebhook(data)
    console.log(beneficiaries)
  } catch (error) {
    console.error(error)
  }
}

setWebhook()
