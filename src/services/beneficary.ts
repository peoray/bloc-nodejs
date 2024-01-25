import { HTTPCore } from '../api'
import {} from '../types'
import {
  ICreateBeneficiary,
  IBeneficiaryResponse,
  IUpdateBeneficiary,
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
  ): Promise<IBeneficiaryResponse> {
    return this.post<IBeneficiaryResponse>(`/beneficiaries`, data)
  }

  public async getBeneficiaryById(
    beneficiaryID: string
  ): Promise<IBeneficiaryResponse> {
    return this.get<IBeneficiaryResponse>(`/beneficiaries/${beneficiaryID}`)
  }

  public async updateBeneficiary(
    beneficiaryID: string,
    data: IUpdateBeneficiary
  ): Promise<IBeneficiaryResponse> {
    return this.put<IBeneficiaryResponse>(
      `/beneficiaries/${beneficiaryID}`,
      data
    )
  }

  public async deleteBeneficiary(beneficiaryID: string): Promise<any> {
    return this.delete<any>(`/beneficiaries/${beneficiaryID}`)
  }
}
