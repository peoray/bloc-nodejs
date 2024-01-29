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
 * Class representing operations related to BillsPayments, extending HTTPCore.
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

  public async getSupportedBills(): Promise<ISupportedBillsResponse> {
    return this.get<ISupportedBillsResponse>(`/bills/supported`)
  }

  public async getSupportedOperators(
    params?: IQueryParams
  ): Promise<ISupportedOperatorsResponse> {
    return this.get<ISupportedOperatorsResponse>(`/bills/operators`, { params })
  }

  public async getOperatorProducts(
    operatorID: string,
    params?: IQueryParams
  ): Promise<IOperatorProductsResponse> {
    return this.get<IOperatorProductsResponse>(
      `/bills/operators/${operatorID}/products`,
      { params }
    )
  }

  public async customerDeviceValidation(
    operatorID: string,
    params?: IQueryParams
  ): Promise<ICustomerDeviceValidationResponse> {
    return this.get<ICustomerDeviceValidationResponse>(
      `/bills/customer/validate/${operatorID}`,
      { params }
    )
  }

  public async makePayment(
    data: IMakePaymentRequest,
    params?: IQueryParams
  ): Promise<IMakePaymentResponse> {
    return this.post<IMakePaymentResponse>(`/bills/payment`, data, { params })
  }
}
