import { Bloc, IWithdrawFromCardRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const withdrawFromCard = async () => {
  try {
    const data: IWithdrawFromCardRequest = {
      amount: 100000,
      to_account_id: '64cb260d73152af277afcb53',
      currency: 'NGN',
    }
    const response = await bloc.withdrawFromCard('card-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

withdrawFromCard()
