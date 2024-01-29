import { HTTPCore } from '../api'
import {
  ITransferFromAFixedAccountRequest,
  ITransferFromAFixedAccountResponse,
} from '../types'

/**
 * Class representing operations related to Transfers, extending HTTPCore.
 */
export class Transfers extends HTTPCore {
  /**
   * Creates an instance of the Transfers class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async transferFromAFixedAccount(
    data: ITransferFromAFixedAccountRequest
  ): Promise<ITransferFromAFixedAccountResponse> {
    return this.post<ITransferFromAFixedAccountResponse>(`/transfers`, data)
  }
}
