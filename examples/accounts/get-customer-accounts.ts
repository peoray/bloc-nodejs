import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCustomerAccounts = async () => {
  try {
    const response = await bloc.getCustomerAccounts('customer-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getCustomerAccounts()
