import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getPaymentLinks = async () => {
  try {
    const response = await bloc.getPaymentLinks()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getPaymentLinks()
