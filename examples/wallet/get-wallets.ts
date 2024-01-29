import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getWallets = async () => {
  try {
    const wallets = await bloc.getWallets()
    console.log(wallets)
  } catch (error) {
    console.error(error)
  }
}

getWallets()
