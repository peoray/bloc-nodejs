import { Bloc, IEditPaymentLinkRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const editPaymentLink = async () => {
  const payload: IEditPaymentLinkRequest = {
    name: 'hmd',
    description: 'Project Hamadam',
  }
  try {
    const response = await bloc.editPaymentLink('link-id', payload)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

editPaymentLink()
