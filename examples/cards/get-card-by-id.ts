import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCardById = async () => {
  try {
    const card = await bloc.getCardById('card-id')
    console.log(card)
  } catch (error) {
    console.error(error)
  }
}

getCardById()
