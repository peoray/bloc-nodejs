import { HTTPCore } from '../api'
import { IListOfBanksResponse } from '../types'

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
}
