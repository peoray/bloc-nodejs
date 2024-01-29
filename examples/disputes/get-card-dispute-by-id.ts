import { Bloc, ICreateCardDisputeRequest, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCardDisputeById = async () => {
  try {
    const response = await bloc.getCardDisputeById('dispute-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getCardDisputeById()
