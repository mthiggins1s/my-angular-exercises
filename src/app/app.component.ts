import { Component } from '@angular/core';

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, ToggleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
