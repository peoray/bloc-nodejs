import { Bloc, IInternalTransferRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const internalTransfer = async () => {
  try {
    const data: IInternalTransferRequest = {
      amount: 10000,
      from_account_id: '6410616d7f1b4b36103f872b',
      to_account_id: '64105fdd7f1b4b36103f870f',
      narration: 'test transaction',
      reference: '617849033kd44223dvs232cd13',
    }
    const response = await bloc.internalTransfer(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

internalTransfer()
