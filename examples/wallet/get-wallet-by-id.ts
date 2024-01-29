import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getWalletById = async () => {
  try {
    const wallet = await bloc.getWalletById('wallet-id')
    console.log(wallet)
  } catch (error) {
    console.error(error)
  }
}

getWalletById()
