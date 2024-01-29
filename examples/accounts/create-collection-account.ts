import { Bloc, ICreateCollectionAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createCollectionAccount = async () => {
  try {
    const data: ICreateCollectionAccountRequest = {
      preferred_bank: 'Providus',
      alias: 'Business',
      collection_rules: {
        amount: 30000,
        frequency: 2,
      },
    }
    const response = await bloc.createCollectionAccount(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

createCollectionAccount()
