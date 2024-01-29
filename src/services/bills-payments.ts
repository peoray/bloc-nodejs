import { HTTPCore } from '../api'
import {
  ICustomerDeviceValidationResponse,
  IMakePaymentRequest,
  IMakePaymentResponse,
  IOperatorProductsResponse,
  IQueryParams,
  ISupportedBillsResponse,
  ISupportedOperatorsResponse,
} from '../types'

/**
 * Class representing operations related to Bills Payments, extending HTTPCore.
 */
export class BillsPayments extends HTTPCore {
  /**
   * Creates an instance of the BillsPayments class.
   * @param {string} secretKey - The secret key for authentication.
   * @param {string} publicKey - The public key for authentication.
   */
  constructor(public secretKey: string, public publicKey: string) {
    super(secretKey, publicKey)
  }

  /**
   * Retrieves the list of supported bills.
   * @returns {Promise<ISupportedBillsResponse>} A promise that resolves to the supported bills response.
   */
  public async getSupportedBills(): Promise<ISupportedBillsResponse> {
    return this.get<ISupportedBillsResponse>(`/bills/supported`)
  }

  /**
   * Retrieves the list of supported operators.
   * @param {IQueryParams} params - Additional query parameters (optional).
   * @returns {Promise<ISupportedOperatorsResponse>} A promise that resolves to the supported operators response.
   */
  public async getSupportedOperators(
    params?: IQueryParams
  ): Promise<ISupportedOperatorsResponse> {
    return this.get<ISupportedOperatorsResponse>(`/bills/operators`, { params })
  }

  /**
   * Retrieves the products for a specific operator.
   * @param {string} operatorID - The ID of the operator.
   * @param {IQueryParams} params - Additional query parameters (optional).
   * @returns {Promise<IOperatorProductsResponse>} A promise that resolves to the operator products response.
   */
  public async getOperatorProducts(
    operatorID: string,
    params?: IQueryParams
  ): Promise<IOperatorProductsResponse> {
    return this.get<IOperatorProductsResponse>(
      `/bills/operators/${operatorID}/products`,
      { params }
    )
  }

  /**
   * Validates customer device for a specific operator.
   * @param {string} operatorID - The ID of the operator.
   * @param {IQueryParams} params - Additional query parameters (optional).
   * @returns {Promise<ICustomerDeviceValidationResponse>} A promise that resolves to the customer device validation response.
   */
  public async customerDeviceValidation(
    operatorID: string,
    params?: IQueryParams
  ): Promise<ICustomerDeviceValidationResponse> {
    return this.get<ICustomerDeviceValidationResponse>(
      `/bills/customer/validate/${operatorID}`,
      { params }
    )
  }

  /**
   * Makes a payment using the provided data.
   * @param {IMakePaymentRequest} data - The data for making the payment.
   * @param {IQueryParams} params - Additional query parameters (optional).
   * @returns {Promise<IMakePaymentResponse>} A promise that resolves to the make payment response.
   */
  public async makePayment(
    data: IMakePaymentRequest,
    params?: IQueryParams
  ): Promise<IMakePaymentResponse> {
    return this.post<IMakePaymentResponse>(`/bills/payment`, data, { params })
  }
}
