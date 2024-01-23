import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createCustomer = async () => {
  try {
    const data = {
      email: 'wooden@mailnator.com',
      phone_number: '08044226688',
      first_name: 'Wood',
      last_name: 'Ace',
      customer_type: 'Personal',
      bvn: '22222222222',
    }
    const customers = await bloc.createCustomer(data)
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

createCustomer()
