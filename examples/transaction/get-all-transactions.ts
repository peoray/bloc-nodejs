import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getAllTransactions = async () => {
  try {
    const transactions = await bloc.getAllTransactions()
    console.log(transactions)
  } catch (error) {
    console.error(error)
  }
}

getAllTransactions()
