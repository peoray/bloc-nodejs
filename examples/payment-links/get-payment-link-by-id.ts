import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getPaymentLinkById = async () => {
  try {
    const response = await bloc.getPaymentLinkById('link-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getPaymentLinkById()
