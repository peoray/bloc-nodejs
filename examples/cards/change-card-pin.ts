import { Bloc, IChangeCardPinRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const issueCard = async () => {
  try {
    const data: IChangeCardPinRequest = {
      old_pin: '4639',
      new_pin: '1332',
    }
    const response = await bloc.changeCardPIN('card-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

issueCard()
