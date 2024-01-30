import { Bloc, ILinkCardwithFixedAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const linkCardwithFixedAccount = async () => {
  try {
    const data: ILinkCardwithFixedAccountRequest = {
      card_id: '64cc85453162f765c606e9ad',
      account_id: '64cb260d73152af277afcb53',
    }
    const response = await bloc.linkCardwithFixedAccount(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

linkCardwithFixedAccount()
