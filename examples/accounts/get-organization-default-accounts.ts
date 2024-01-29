import { Bloc, ICreateCollectionAccountRequest } from '../../dist'

const bloc = new Bloc('secret-keyasfasfbahfb', 'public-key')

const getOrganisationDefaultAccounts = async () => {
  try {
    const response = await bloc.getOrganisationDefaultAccounts()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getOrganisationDefaultAccounts()
