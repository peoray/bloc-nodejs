import { Bloc, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getOperatorProducts = async () => {
  try {
    const products = await bloc.getOperatorProducts('operator-id')
    console.log(products)
  } catch (error) {
    console.error(error)
  }
}

getOperatorProducts()
