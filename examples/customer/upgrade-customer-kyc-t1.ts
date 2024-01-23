import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const upgradeCustomerToKYCT1 = async () => {
  try {
    const data = {
      place_of_birth: 'Port Harcourt',
      dob: '1992-03-30',
      gender: 'Male',
      country: 'Nigeria',
      address: {
        street: '10c pinnock estate jakande',
        city: 'Lekki',
        state: 'lagos',
        country: 'Nigeria',
        postal_code: '1000101',
      },
      image: 'base64/image',
    }
    const customers = await bloc.upgradeCustomerToKYCT1('123456', data)
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

upgradeCustomerToKYCT1()
