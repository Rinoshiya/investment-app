import { Component, inject, Input } from '@angular/core';
import { type investmentResults } from '../investment-input.model'; 
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  // @Input() results? : investmentResults[];
  // constructor(private investmentResult: InvestmentService) {}
  private investmentResult = inject(InvestmentService)
  get results() {
    return this.investmentResult.investmentResults
  }
}
