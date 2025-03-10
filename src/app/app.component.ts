import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { User } from '../users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-exercises';
}
