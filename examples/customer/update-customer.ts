import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const updateCustomer = async () => {
  try {
    const data = {
      email: 'wooden@mailnator.com',
      phone_number: '09174839247',
      first_name: 'Destiny',
      last_name: 'Effiong',
      customer_type: 'retail',
      address: {
        street: '3 Jide Ajao Close, Off WEMA Old Dugbe Layout',
        city: 'Victoria Island',
        state: 'Lagos',
        country: 'Nigeria',
        postal_code: '100001',
      },
    }
    const customers = await bloc.updateCustomer('123456', data)
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

updateCustomer()
