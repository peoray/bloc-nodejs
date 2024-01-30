import { Bloc, IFundCardRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const fundCard = async () => {
  try {
    const data: IFundCardRequest = {
      amount: 100000,
      from_account_id: '64cb260d73152af277afcb53',
      currency: 'NGN',
    }
    const response = await bloc.fundCard('card-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

fundCard()
