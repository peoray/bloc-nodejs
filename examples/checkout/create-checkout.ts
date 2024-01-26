import { Bloc, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createCheckout = async () => {
  try {
    const data: ICreateCheckout = {
      customer_email: 'jerry@orchs.xyz',
      customer_name: 'jerry',
      country: 'Nigeria',
      amount: 100000,
    }
    const response = await bloc.createCheckout(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

createCheckout()
