import { HTTPCore } from '../api'
import {
  IGetExchangeRateResponse,
  IListOfBanksResponse,
  IResolveAccountResponse,
} from '../types'
import { IQueryParams } from '../types/base'

/**
 * Class representing operations related to Simulations, extending HTTPCore.
 */
export class Simulation extends HTTPCore {
  /**
   * Creates an instance of the Simulation class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getListOfBanks(): Promise<IListOfBanksResponse> {
    return this.get<IListOfBanksResponse>(`/banks`)
  }

  public async resolveAccount(
    params?: IQueryParams
  ): Promise<IResolveAccountResponse> {
    return this.get<IResolveAccountResponse>(`/resolve-account`, { params })
  }

  public async getExchangeRate(
    currencyPair: string
  ): Promise<IGetExchangeRateResponse> {
    return this.get<IGetExchangeRateResponse>(
      `/rates/currencies/${currencyPair}`
    )
  }
}
