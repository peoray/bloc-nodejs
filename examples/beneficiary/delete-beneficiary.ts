import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const deleteBeneficiary = async () => {
  try {
    const beneficiary = await bloc.deleteBeneficiary('123456')
    console.log(beneficiary)
  } catch (error) {
    console.error(error)
  }
}

deleteBeneficiary()
