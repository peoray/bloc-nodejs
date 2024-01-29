import { HTTPCore } from '../api'
import {
  IBulkTransferRequest,
  IInternalTransferRequest,
  ITransferFromAFixedAccountRequest,
  ITransferFromOrganizationBalance,
  ITransferResponse,
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
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers`, data)
  }

  public async transferFromOrganizationBalance(
    data: ITransferFromOrganizationBalance
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers/balance`, data)
  }

  public async internalTransfer(
    data: IInternalTransferRequest
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers/internal`, data)
  }

  public async bulkTransfer(
    data: IBulkTransferRequest
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers/bulk`, data)
  }
}
