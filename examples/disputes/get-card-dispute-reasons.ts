import { Bloc, ICreateCardDisputeRequest, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCardDisputeReasons = async () => {
  try {
    const response = await bloc.getCardDisputeReasons()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getCardDisputeReasons()
