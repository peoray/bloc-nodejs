import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCustomers = async () => {
  try {
    const customers = await bloc.getCustomers()
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

getCustomers()
