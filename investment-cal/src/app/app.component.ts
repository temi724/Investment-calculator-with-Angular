import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InterfaceComponent } from './interface/interface.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-cal';
}
