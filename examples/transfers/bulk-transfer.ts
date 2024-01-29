import { Bloc, IBulkTransferRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const bulkTransfer = async () => {
  try {
    const data: IBulkTransferRequest = {
      account_id: '640b045929eb9cf45bc720d2',
      bulk_list: [
        {
          amount: 1000,
          bank_code: '090110',
          account_number: '1012233362',
          narration: 'Bulk Test',
          reference: '68314903j344223dd232ed13',
        },
        {
          amount: 1000,
          bank_code: '090110',
          account_number: '1012233362',
          narration: 'Bulk Test',
          reference: '68314903j344223dd232ed13',
        },
      ],
    }
    const response = await bloc.bulkTransfer(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

bulkTransfer()
