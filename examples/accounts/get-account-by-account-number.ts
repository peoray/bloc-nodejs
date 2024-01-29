import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getAccountByAccountNumber = async () => {
  try {
    const response = await bloc.getAccountByAccountNumber('account-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getAccountByAccountNumber()
