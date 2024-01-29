import { Bloc, ICreateCardDisputeRequest, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCardDisputes = async () => {
  try {
    const response = await bloc.getCardDisputes()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getCardDisputes()
