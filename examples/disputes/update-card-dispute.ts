import { Bloc, IUpdateCardDisputeRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const updateCardDispute = async () => {
  try {
    const data: IUpdateCardDisputeRequest = {
      reason: 'fraudulent',
      explanation:
        'Some explanation about the fraudulent activity, that I can explain',
      meta_data: {
        payment: 'fraudulent payment',
      },
    }
    const response = await bloc.updateCardDispute('dispute-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

updateCardDispute()
