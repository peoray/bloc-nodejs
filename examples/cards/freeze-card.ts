import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const freezeCard = async () => {
  try {
    const response = await bloc.freezeCard('card-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

freezeCard()
