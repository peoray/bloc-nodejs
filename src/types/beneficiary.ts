export interface ICreateBeneficiary {
  currency: string
  accountNumber: string
  bankCode: string
}

export interface ICreateBeneficiaryResponse {
  success: boolean
  data: {
    id: string
    currency: string
    accountNumber: string
    bankCode: string
    createdAt: string
    updatedAt: string
  }
  message: string
}
