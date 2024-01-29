import { Bloc, ICreateFixedAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createFixedAccount = async () => {
  try {
    const data: ICreateFixedAccountRequest = {
      customer_id: '64c9e81497880d4b259cec77',
      preferred_bank: 'Banc Corp',
      alias: 'business',
      collection_rules: {
        amount: 30000,
        frequency: 2,
      },
    }
    const response = await bloc.createFixedAccount(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

createFixedAccount()
