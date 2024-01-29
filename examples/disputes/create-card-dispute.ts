import { Bloc, ICreateCardDisputeRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const createCardDispute = async () => {
  try {
    const data: ICreateCardDisputeRequest = {
      transaction_id: '6437d9b03260fa1c251dd21d',
      reason: 'fraudulent',
      explanation:
        'Some explanation about the fraudulent activity, that I can explain',
      meta_data: {
        payment: 'fraudulent payment',
      },
    }
    const response = await bloc.createCardDispute(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

createCardDispute()
