import { HTTPCore } from '../api'
import {
  IGetExchangeRateResponse,
  IListOfBanksResponse,
  IResolveAccountResponse,
} from '../types'
import { IQueryParams } from '../types/base'

/**
 * Class representing operations related to Miscellaneous, extending HTTPCore.
 */
export class Miscellaneous extends HTTPCore {
  /**
   * Creates an instance of the Miscellaneous class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Gets a list of banks.
   * @returns {Promise<IListOfBanksResponse>} A promise that resolves to the response containing the list of banks.
   */
  public async getListOfBanks(): Promise<IListOfBanksResponse> {
    return this.get<IListOfBanksResponse>(`/banks`)
  }

  /**
   * Resolves account information.
   * @param {IQueryParams} params - Query parameters for resolving account.
   * @returns {Promise<IResolveAccountResponse>} A promise that resolves to the response containing the resolved account information.
   */
  public async resolveAccount(
    params?: IQueryParams
  ): Promise<IResolveAccountResponse> {
    return this.get<IResolveAccountResponse>(`/resolve-account`, { params })
  }

  /**
   * Gets the exchange rate for a currency pair.
   * @param {string} currencyPair - The currency pair for which to retrieve the exchange rate.
   * @returns {Promise<IGetExchangeRateResponse>} A promise that resolves to the response containing the exchange rate.
   */
  public async getExchangeRate(
    currencyPair: string
  ): Promise<IGetExchangeRateResponse> {
    return this.get<IGetExchangeRateResponse>(
      `/rates/currencies/${currencyPair}`
    )
  }
}
