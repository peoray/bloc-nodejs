import { Bloc, IIssueCardRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const issueCard = async () => {
  try {
    const data: IIssueCardRequest = {
      customer_id: '64c9e81497880d4b259cec77',
      brand: 'Verve',
    }
    const response = await bloc.issueCard(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

issueCard()
