import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const unlinkCardwithFixedAccount = async () => {
  try {
    const response = await bloc.unlinkCardwithFixedAccount('card-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

unlinkCardwithFixedAccount()
