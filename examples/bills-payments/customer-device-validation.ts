import { Bloc, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const customerDeviceValidation = async () => {
  try {
    const response = await bloc.customerDeviceValidation('operator-id')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

customerDeviceValidation()
