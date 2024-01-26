import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const resolveAccount = async () => {
  try {
    const account = await bloc.resolveAccount() // add query params
    console.log(account)
  } catch (error) {
    console.error(error)
  }
}

resolveAccount()
