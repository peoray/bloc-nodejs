import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getListOfBanks = async () => {
  try {
    const banks = await bloc.getListOfBanks()
    console.log(banks)
  } catch (error) {
    console.error(error)
  }
}

getListOfBanks()
