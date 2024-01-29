import { Bloc, ICreateCollectionAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getAccounts = async () => {
  try {
    const response = await bloc.getAccounts()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getAccounts()
