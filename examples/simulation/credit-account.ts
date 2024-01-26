import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const creditAccount = async () => {
  try {
    const data = {
      amount: 400000,
      account_id: '64cb260d73152af277afcb53',
    }
    const account = await bloc.creditAccount(data)
    console.log(account)
  } catch (error) {
    console.error(error)
  }
}

creditAccount()
