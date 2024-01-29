import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCustomerWallets = async () => {
  try {
    const wallet = await bloc.getCustomerWallets('customer-id')
    console.log(wallet)
  } catch (error) {
    console.error(error)
  }
}

getCustomerWallets()
