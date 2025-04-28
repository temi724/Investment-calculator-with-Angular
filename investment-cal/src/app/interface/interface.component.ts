import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-interface',
  imports: [FormsModule],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css',
})
export class InterfaceComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
}
