import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const debitWallet = async () => {
  try {
    const payload = {
      wallet_id: '64cb2b7d73152af277afcb5d',
      amount: 30000,
    }
    const wallet = await bloc.debitWallet(payload)
    console.log(wallet)
  } catch (error) {
    console.error(error)
  }
}

debitWallet()
