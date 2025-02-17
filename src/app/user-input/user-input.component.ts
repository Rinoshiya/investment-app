import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type investmentData } from '../investment-input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  public initialInvestmentValue = '0' ;
  public annualInvestmentValue = '0' ;
  public expectedReturnValue = '5' ;
  public durationValue = '10' ;
  // not using service
  // @Output() calculate = new EventEmitter<investmentData>();
  constructor(private investmentService: InvestmentService){}
  onFormSubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestmentValue,
    //   annualInvestment: +this.annualInvestmentValue,
    //   expectedReturn: +this.expectedReturnValue,
    //   duration: +this.durationValue
    // });
    this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.initialInvestmentValue,
        annualInvestment: +this.annualInvestmentValue,
        expectedReturn: +this.expectedReturnValue,
        duration: +this.durationValue
      })
  }
}
