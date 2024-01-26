import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getWebhook = async () => {
  try {
    const beneficiaries = await bloc.getWebhook()
    console.log(beneficiaries)
  } catch (error) {
    console.error(error)
  }
}

getWebhook()
