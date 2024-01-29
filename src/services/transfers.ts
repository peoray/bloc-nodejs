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

  /**
   * Initiates a transfer from a fixed account.
   * @param {ITransferFromAFixedAccountRequest} data - The data for the transfer.
   * @returns {Promise<ITransferResponse>} A promise that resolves to the transfer response.
   */
  public async transferFromAFixedAccount(
    data: ITransferFromAFixedAccountRequest
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers`, data)
  }

  /**
   * Initiates a transfer from the organization's balance.
   * @param {ITransferFromOrganizationBalance} data - The data for the transfer.
   * @returns {Promise<ITransferResponse>} A promise that resolves to the transfer response.
   */
  public async transferFromOrganizationBalance(
    data: ITransferFromOrganizationBalance
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers/balance`, data)
  }

  /**
   * Initiates an internal transfer.
   * @param {IInternalTransferRequest} data - The data for the transfer.
   * @returns {Promise<ITransferResponse>} A promise that resolves to the transfer response.
   */
  public async internalTransfer(
    data: IInternalTransferRequest
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers/internal`, data)
  }

  /**
   * Initiates a bulk transfer.
   * @param {IBulkTransferRequest} data - The data for the bulk transfer.
   * @returns {Promise<ITransferResponse>} A promise that resolves to the bulk transfer response.
   */
  public async bulkTransfer(
    data: IBulkTransferRequest
  ): Promise<ITransferResponse> {
    return this.post<ITransferResponse>(`/transfers/bulk`, data)
  }
}
