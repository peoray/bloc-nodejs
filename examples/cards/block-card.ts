import { Bloc, IBlockCardRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const blockCard = async () => {
  try {
    const data: IBlockCardRequest = {
      account_id: '64cb260d73152af277afcb53',
      reason: 'lost',
    }
    const response = await bloc.blockCard('card-id', data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

blockCard()
