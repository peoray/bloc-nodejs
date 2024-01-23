import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const upgradeCustomerToKYCT3 = async () => {
  try {
    const data = {
      image: 'base64/image',
    }
    const customers = await bloc.upgradeCustomerToKYCT3('123456', data)
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

upgradeCustomerToKYCT3()
