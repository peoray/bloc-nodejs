import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getBeneficiaryById = async () => {
  try {
    const beneficiary = await bloc.getBeneficiaryById('123456')
    console.log(beneficiary)
  } catch (error) {
    console.error(error)
  }
}

getBeneficiaryById()
