import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createBeneficiary = async () => {
  try {
    const data = {
      currency: 'NGN',
      accountNumber: '2011713547',
      bankCode: '090581',
    }
    const beneficiaries = await bloc.createBeneficiary(data)
    console.log(beneficiaries)
  } catch (error) {
    console.error(error)
  }
}

createBeneficiary()
