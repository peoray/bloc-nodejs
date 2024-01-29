import { Bloc, ICreateCollectionAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getAccountById = async () => {
  try {
    const response = await bloc.getAccountById('account-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getAccountById()
