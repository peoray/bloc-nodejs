import { Bloc, IUpdateAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const reopenAccount = async () => {
  try {
    const data: IUpdateAccountRequest = {
      reason: 'bad kyc details',
    }
    const response = await bloc.reopenAccount('account-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

reopenAccount()
