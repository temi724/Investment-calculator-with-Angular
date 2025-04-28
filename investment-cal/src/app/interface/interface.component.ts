import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { InputModel } from '../model/input-model';
import { InvestmentcalService } from '../investmentcal.service';

@Component({
  selector: 'app-interface',
  imports: [FormsModule],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css',
})
export class InterfaceComponent {
  constructor(private investmentcalService: InvestmentcalService) {}

  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  generateResult() {
    const inputData: InputModel = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    this.investmentcalService.calculateInvestmentResults(inputData);
    console.log(this.investmentcalService.resultData);

    // Call the service to calculate the investment results
    // this.investmentcalService.calculateInvestmentResults(inputData);
  }
}
