import { Bloc, ITransferFromAFixedAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const transferFromAFixedAccount = async () => {
  try {
    const data: ITransferFromAFixedAccountRequest = {
      amount: 10000,
      bank_code: '058',
      account_number: '2020202020',
      narration: 'from jerry',
      account_id: '64cb260d73152af277afcb53',
      reference: 'REF2bbbfa09f11688558067066',
    }
    const response = await bloc.transferFromAFixedAccount(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

transferFromAFixedAccount()
