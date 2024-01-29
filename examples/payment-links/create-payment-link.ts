import { Bloc, ICreatePaymentLinkRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createPaymentLink = async () => {
  try {
    const data: ICreatePaymentLinkRequest = {
      name: 'AmG',
      description: 'Project Adam',
      amount: 500000,
      currency: 'USD',
    }
    const response = await bloc.createPaymentLink(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

createPaymentLink()
