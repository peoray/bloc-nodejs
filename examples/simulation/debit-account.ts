import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const debitAccount = async () => {
  try {
    const data = {
      amount: 400000,
      account_id: '64cb260d73152af277afcb53',
    }
    const account = await bloc.debitAccount(data)
    console.log(account)
  } catch (error) {
    console.error(error)
  }
}

debitAccount()
