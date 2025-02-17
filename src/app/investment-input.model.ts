export interface investmentData {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }
export interface investmentResults {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number
}