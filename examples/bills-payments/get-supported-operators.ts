import { Bloc, ICreateCheckout } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getSupportedOperators = async () => {
  try {
    const operators = await bloc.getSupportedOperators()
    console.log(operators)
  } catch (error) {
    console.error(error)
  }
}

getSupportedOperators()
