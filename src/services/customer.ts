import { HTTPCore } from '../api'
import {
  ICreateCustomer,
  ICreateCustomerResponse,
  IGetCustomerByIdResponse,
  IGetCustomerResponse,
  IMeansOfIdentification,
  IRevalidateCustomerKYCResponse,
  IUpdateCustomer,
  IUpdateCustomerResponse,
  IUpgradeCustomerToKYCT1,
  IUpgradeCustomerToKYCT2,
  IUpgradeCustomerToKYCT3,
  IUpgradeCustomerToKYCTierResponse,
} from '../types'

/**
 * Class representing Customer operations that extends HTTPCore.
 */
export class Customer extends HTTPCore {
  /**
   * Creates an instance of the Customer class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Retrieves a list of customers.
   * @returns {Promise<ICustomerResponse>} A promise that resolves to the customer response.
   */
  public async getCustomers(): Promise<IGetCustomerResponse> {
    return this.get<IGetCustomerResponse>(`/customers`)
  }

  /**
   * Retrieves means of identification for customers.
   * @returns {Promise<IMeansOfIdentification>} A promise that resolves to means of identification.
   */
  public async meansOfIdentification(): Promise<IMeansOfIdentification> {
    return this.get<IMeansOfIdentification>(`/customers/means/identity`)
  }

  /**
   * Revalidates KYC (Know Your Customer) for a specific customer.
   * @param {string} customerID - The ID of the customer to revalidate KYC for.
   * @returns {Promise<IRevalidateCustomerKYCResponse>} A promise that resolves to KYC revalidation response.
   */
  public async revalidateCustomerKYC(
    customerID: string
  ): Promise<IRevalidateCustomerKYCResponse> {
    return this.get<IRevalidateCustomerKYCResponse>(
      `/customers/kyc/revalidate/${customerID}`
    )
  }

  /**
   * Retrieves customer information by ID.
   * @param {string} customerID - The ID of the customer to retrieve.
   * @returns {Promise<IGetCustomerByIdResponse>} A promise that resolves to customer information.
   */
  public async getCustomerById(
    customerID: string
  ): Promise<IGetCustomerByIdResponse> {
    return this.get<IGetCustomerByIdResponse>(`/customers/${customerID}`)
  }

  /**
   * Creates a new customer.
   * @param {ICreateCustomer} data - The data to create the customer.
   * @returns {Promise<ICreateCustomerResponse>} A promise that resolves to the created customer response.
   */
  public async createCustomer(
    data: ICreateCustomer
  ): Promise<ICreateCustomerResponse> {
    return this.post<ICreateCustomerResponse>(`/customers`, data)
  }

  /**
   * Updates customer information.
   * @param {string} customerID - The ID of the customer to update.
   * @param {IUpdateCustomer} data - The data to update the customer.
   * @returns {Promise<IUpdateCustomerResponse>} A promise that resolves to the updated customer response.
   */
  public async updateCustomer(
    customerID: string,
    data: IUpdateCustomer
  ): Promise<IUpdateCustomerResponse> {
    return this.put<IUpdateCustomerResponse>(`/customers/${customerID}`, data)
  }

  /**
   * Upgrades a customer to KYC Tier 1.
   * @param {string} customerID - The ID of the customer to upgrade.
   * @param {IUpgradeCustomerToKYCT1} data - The data for KYC Tier 1 upgrade.
   * @returns {Promise<IUpgradeCustomerToKYCTierResponse>} A promise that resolves to the KYC Tier upgrade response.
   */
  public async upgradeCustomerToKYCT1(
    customerID: string,
    data: IUpgradeCustomerToKYCT1
  ): Promise<IUpgradeCustomerToKYCTierResponse> {
    return this.put<IUpgradeCustomerToKYCTierResponse>(
      `/customers/upgrade/t1/${customerID}`,
      data
    )
  }

  /**
   * Upgrades a customer to KYC Tier 2.
   * @param {string} customerID - The ID of the customer to upgrade.
   * @param {IUpgradeCustomerToKYCT2} data - The data for KYC Tier 2 upgrade.
   * @returns {Promise<IUpgradeCustomerToKYCTierResponse>} A promise that resolves to the KYC Tier upgrade response.
   */
  public async upgradeCustomerToKYCT2(
    customerID: string,
    data: IUpgradeCustomerToKYCT2
  ): Promise<IUpgradeCustomerToKYCTierResponse> {
    return this.put<IUpgradeCustomerToKYCTierResponse>(
      `/customers/upgrade/t2/${customerID}`,
      data
    )
  }

  /**
   * Upgrades a customer to KYC Tier 3.
   * @param {string} customerID - The ID of the customer to upgrade.
   * @param {IUpgradeCustomerToKYCT3} data - The data for KYC Tier 3 upgrade.
   * @returns {Promise<IUpgradeCustomerToKYCTierResponse>} A promise that resolves to the KYC Tier upgrade response.
   */
  public async upgradeCustomerToKYCT3(
    customerID: string,
    data: IUpgradeCustomerToKYCT3
  ): Promise<IUpgradeCustomerToKYCTierResponse> {
    return this.put<IUpgradeCustomerToKYCTierResponse>(
      `/customers/upgrade/t3/${customerID}`,
      data
    )
  }
}
