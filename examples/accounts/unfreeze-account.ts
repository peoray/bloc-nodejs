import { Bloc, IUpdateAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const unfreezeAccount = async () => {
  try {
    const data: IUpdateAccountRequest = {
      reason: 'bad kyc details',
    }
    const response = await bloc.unfreezeAccount('account-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

unfreezeAccount()
