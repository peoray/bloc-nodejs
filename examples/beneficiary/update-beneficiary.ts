import { Bloc } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const updateBeneficiary = async () => {
  try {
    const data = {
      bankCode: '090581',
    }
    const beneficiaries = await bloc.updateBeneficiary('1245666', data)
    console.log(beneficiaries)
  } catch (error) {
    console.error(error)
  }
}

updateBeneficiary()
