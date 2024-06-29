import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.model';
import { CURRENCIES } from '../currencies';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>()
  // @Output() updatedCurrencyCode = new EventEmitter<string>()
  calculate = output<InvestmentInput>()
  updatedCurrencyCode = output<string>()

  enteredInitialInvestment = signal('0')
  enteredAnnualInvestment = signal('0')
  enteredExpectedReturn = signal('5')
  enteredDuration = signal('10')
  enteredCurrency = signal('USD')

  currencyObject: {[key: string]: string} = CURRENCIES
  currencyKeys: string[] = Object.keys(this.currencyObject)

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    })
    this.updatedCurrencyCode.emit(this.enteredCurrency())

    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')
    this.enteredCurrency.set('USD')
  }
}
