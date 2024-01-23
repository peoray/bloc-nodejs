import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getCustomerById = async () => {
  try {
    const customers = await bloc.getCustomerById('123456')
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

getCustomerById()
