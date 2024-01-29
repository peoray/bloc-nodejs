import { Bloc, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getSupportedBills = async () => {
  try {
    const bills = await bloc.getSupportedBills()
    console.log(bills)
  } catch (error) {
    console.error(error)
  }
}

getSupportedBills()
