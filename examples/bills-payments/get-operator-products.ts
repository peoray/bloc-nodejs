import { Bloc, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getOperatorProducts = async () => {
  try {
    const operators = await bloc.getOperatorProducts('operator-id')
    console.log(operators)
  } catch (error) {
    console.error(error)
  }
}

getOperatorProducts()
