import { HTTPCore } from '../api'
import {} from '../types'
import {
  ICreateBeneficiary,
  ICreateBeneficiaryResponse,
} from '../types/beneficiary'

/**
 * Class representing Customer operations that extends HTTPCore.
 */
export class Beneficiary extends HTTPCore {
  /**
   * Creates an instance of the Beneficiary class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }
  public async createBeneficiary(
    data: ICreateBeneficiary
  ): Promise<ICreateBeneficiaryResponse> {
    return this.post<ICreateBeneficiaryResponse>(`/beneficiaries`, data)
  }
}
