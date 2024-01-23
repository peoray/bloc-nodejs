import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const upgradeCustomerToKYCT2 = async () => {
  try {
    const data = {
      means_of_id: 'NIN Slip',
      image: 'base64/image',
    }
    const customers = await bloc.upgradeCustomerToKYCT2('123456', data)
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

upgradeCustomerToKYCT2()
