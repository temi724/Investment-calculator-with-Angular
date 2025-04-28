import { Component, Inject } from '@angular/core';
import { InvestmentcalService } from '../investmentcal.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgFor, NgIf } from '@angular/common'; // Import CurrencyPipe

@Component({
  selector: 'app-result-table',
  imports: [CommonModule],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css',
})
export class ResultTableComponent {
  constructor(private showResult: InvestmentcalService) {}

  get resultsToShow() {
    return this.showResult.resultData;
  }
}
