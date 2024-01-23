import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const revalidateCustomerKYC = async () => {
  try {
    const customers = await bloc.revalidateCustomerKYC('123456')
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

revalidateCustomerKYC()
