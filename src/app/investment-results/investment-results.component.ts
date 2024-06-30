import { CurrencyPipe } from '@angular/common';
import { Component, Input, computed, input } from '@angular/core';
import { InvestmentService } from '../investment.services';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]
  // @Input() currencyCode!: string

  constructor(private investmentService: InvestmentService) {}

  results = computed(() => this.investmentService.resultData())
  currencyCode = this.investmentService.currency()
}
