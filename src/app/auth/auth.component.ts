import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogsDirective } from '../logs.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives :[LogsDirective]
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
