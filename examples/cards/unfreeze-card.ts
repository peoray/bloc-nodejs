import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const unfreezeCard = async () => {
  try {
    const response = await bloc.unfreezeCard('card-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

unfreezeCard()
