import { Bloc, ITransferFromOrganizationBalance } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const transferFromOrganizationBalance = async () => {
  try {
    const data: ITransferFromOrganizationBalance = {
      amount: 10000,
      bank_code: '058',
      account_number: '2020202020',
      narration: 'from jerry',
      reference: 'REF2bbbfa09f11688558067066',
    }
    const response = await bloc.transferFromOrganizationBalance(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

transferFromOrganizationBalance()
