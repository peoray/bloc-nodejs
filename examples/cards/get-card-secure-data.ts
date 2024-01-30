import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCardSecureData = async () => {
  try {
    const card = await bloc.getCardSecureData('card-id')
    console.log(card)
  } catch (error) {
    console.error(error)
  }
}

getCardSecureData()
