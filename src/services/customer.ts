import { HTTPCore } from '../api'
import {
  ICreateCustomer,
  ICreateCustomerResponse,
  ICustomerResponse,
  IGetCustomerByIdResponse,
  IMeansOfIdentification,
  IRevalidateCustomerKYCResponse,
  IUpdateCustomer,
  IUpdateCustomerResponse,
  IUpgradeCustomerToKYCT1,
  IUpgradeCustomerToKYCT1Response,
} from '../types'

export class Customer extends HTTPCore {
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  public async getCustomers(): Promise<ICustomerResponse> {
    return this.get<ICustomerResponse>(`/customers`)
  }

  public async meansOfIdentification(): Promise<IMeansOfIdentification> {
    return this.get<IMeansOfIdentification>(`/customers/means/identity`)
  }

  public async revalidateCustomerKYC(
    customerID: string
  ): Promise<IRevalidateCustomerKYCResponse> {
    return this.get<IRevalidateCustomerKYCResponse>(
      `/customers/kyc/revalidate/${customerID}`
    )
  }

  public async getCustomerById(
    customerID: string
  ): Promise<IGetCustomerByIdResponse> {
    return this.get<IGetCustomerByIdResponse>(`/customers/${customerID}`)
  }

  public async createCustomer(
    data: ICreateCustomer
  ): Promise<ICreateCustomerResponse> {
    return this.post<ICreateCustomerResponse>(`/customers`, data)
  }

  public async updateCustomer(
    customerID: string,
    data: IUpdateCustomer
  ): Promise<IUpdateCustomerResponse> {
    return this.put<IUpdateCustomerResponse>(`/customers/${customerID}`, data)
  }

  public async upgradeCustomerToKYCT1(
    customerID: string,
    data: IUpgradeCustomerToKYCT1
  ): Promise<IUpgradeCustomerToKYCT1Response> {
    return this.put<IUpgradeCustomerToKYCT1Response>(
      `/customers/upgrade/k1/${customerID}`,
      data
    )
  }
}
