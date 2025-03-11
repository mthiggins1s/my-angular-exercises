import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  title: string = 'Title for Website';

  changeTitle(): void {
    this.title = 'New Title for Website!';
  }
}
