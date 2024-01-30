import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCardById = async () => {
  try {
    const cards = await bloc.getCardById('card-id')
    console.log(cards)
  } catch (error) {
    console.error(error)
  }
}

getCardById()
