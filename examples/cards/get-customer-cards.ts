import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCustomerCards = async () => {
  try {
    const cards = await bloc.getCustomerCards('customer-id')
    console.log(cards)
  } catch (error) {
    console.error(error)
  }
}

getCustomerCards()
