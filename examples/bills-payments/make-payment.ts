import { Bloc, IMakePaymentRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const makePayment = async () => {
  try {
    const payload: IMakePaymentRequest = {
      amount: 30000,
      product_id: 'prd_WVFqdQmk6sAkrgkU8Ep7qK',
      operator_id: 'op_tHvaAHp85mTsRtEU2yqxLM',
      account_id: '640b045929eb9cf45bc720d2',
      device_details: {
        meter_type: 'prepaid',
        device_number: '04283290809',
        beneficiary_msisdn: '08163830893',
      },
      meta_data: {},
    }
    const response = await bloc.makePayment(payload)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

makePayment()
