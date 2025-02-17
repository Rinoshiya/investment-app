import { Component, signal } from '@angular/core';
import { type investmentData, type investmentResults} from './investment-input.model';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'investment-app';
  // public investmentResults: investmentResults[] = [];
  // investmentResults = signal<investmentResults[] | undefined>(undefined);
  // calculateInvestmentResults(data: investmentData) {
  //   const annualData = [];
  //   // destructure
  //   const {initialInvestment, annualInvestment, expectedReturn, duration} = data
  //   let investmentValue = initialInvestment;
    
  //   for(let i=0; i< duration; i++) {
  //     const year = i+1;
  //     const interestEarnedInYear = investmentValue + (expectedReturn / 100);
  //     const totalInterest = investmentValue * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: annualInvestment,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment
  //     })
  //   }
  //   // this.investmentResults = annualData;
  //   this.investmentResults.set(annualData)
  //   console.log("this.investmentResults",this.investmentResults)
  // }
}
