import { Bloc, IDeletePaymentLinksRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const deletePaymentLink = async () => {
  try {
    const payload: IDeletePaymentLinksRequest = {
      ids: ['645a234d85b17f000a30541a', '645a20d185b17f000a305385'],
    }
    const response = await bloc.deletePaymentLink(payload)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

deletePaymentLink()
