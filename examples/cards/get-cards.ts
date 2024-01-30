import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCards = async () => {
  try {
    const cards = await bloc.getCards()
    console.log(cards)
  } catch (error) {
    console.error(error)
  }
}

getCards()
