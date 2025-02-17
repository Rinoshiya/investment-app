import { Injectable } from "@angular/core";
import { investmentData, investmentResults } from "./investment-input.model";

@Injectable({
    providedIn: "root"
})
export class InvestmentService {
    investmentResults?: investmentResults[]
    calculateInvestmentResults(data: investmentData) {
        const annualData = [];
        // destructure
        const {initialInvestment, annualInvestment, expectedReturn, duration} = data
        let investmentValue = initialInvestment;
        
        for(let i=0; i< duration; i++) {
          const year = i+1;
          const interestEarnedInYear = investmentValue + (expectedReturn / 100);
          const totalInterest = investmentValue * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: annualInvestment,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment
          })
        }
        this.investmentResults = annualData;
      }
}