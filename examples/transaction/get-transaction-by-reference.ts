import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getTransactionByReference = async () => {
  try {
    const transaction = await bloc.getTransactionByReference('123456')
    console.log(transaction)
  } catch (error) {
    console.error(error)
  }
}

getTransactionByReference()
