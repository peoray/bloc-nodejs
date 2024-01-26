import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getExchangeRate = async () => {
  try {
    const rate = await bloc.getExchangeRate('USD-NGN')
    console.log(rate)
  } catch (error) {
    console.error(error)
  }
}

getExchangeRate()
