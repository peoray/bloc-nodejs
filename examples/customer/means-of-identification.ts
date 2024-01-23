import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const meansOfIdentification = async () => {
  try {
    const customers = await bloc.meansOfIdentification()
    console.log(customers)
  } catch (error) {
    console.error(error)
  }
}

meansOfIdentification()
