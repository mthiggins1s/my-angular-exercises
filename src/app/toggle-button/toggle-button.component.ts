import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
  standalone: true
})
export class ToggleButtonComponent {

  // Initialize toggleButton to 'Show' by default
  toggleButton: string = 'Show';

  // Method to toggle the text between 'Show' and 'Hide'
  changeText(): void {
    this.toggleButton = this.toggleButton === 'Show' ? 'Hide' : 'Show';
  }
}
