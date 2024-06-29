import { Component, Input, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

import type { InvestmentInput } from './investment-input.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  // resultData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]
  // currency!: string

  currency = signal<string>('')
  resultData = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] | undefined >(undefined)

  onChangeCurrencyCode(currencyCode: string) {
    // this.currency = currencyCode
    this.currency.set(currencyCode)
  }

  onCalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration  } = data

    const annualData = []
    let investmentValue = initialInvestment

    for (let i = 0; i < duration; i++) {
      const year = i + 1
      const interestEarnedInYear = investmentValue * (expectedReturn / 100)
      investmentValue += interestEarnedInYear + annualInvestment
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year
      })
    }

    // this.resultData = annualData
    this.resultData.set(annualData)

  }
}
