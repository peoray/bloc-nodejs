import { Bloc, IUpdateAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const freezeAccount = async () => {
  try {
    const data: IUpdateAccountRequest = {
      reason: 'bad kyc details',
    }
    const response = await bloc.freezeAccount('account-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

freezeAccount()
