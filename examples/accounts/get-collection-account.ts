import { Bloc, ICreateCollectionAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCollectionAccount = async () => {
  try {
    const response = await bloc.getCollectionAccount()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getCollectionAccount()
