export interface BankRequest {
  shipId: string
  year: number
  amount: number
}

export interface BankResponse {
  applied?: number
  remaining?: number
}