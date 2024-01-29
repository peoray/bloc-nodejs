import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createWallet = async () => {
  try {
    const data = {
      customer_id: '64c9e81497880d4b259cec77',
      preferred_bank: 'Banc Corp',
      alias: 'Business',
    }
    const wallet = await bloc.createWallet(data)
    console.log(wallet)
  } catch (error) {
    console.error(error)
  }
}

createWallet()
