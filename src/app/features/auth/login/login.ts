import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly errorMessage = signal('');

  readonly loginForm = this.fb.nonNullable.group({
    email: ['admin@contacts.com', [Validators.required, Validators.email]],
    password: ['Password@123', [Validators.required]],
  });

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    const isLoggedIn = this.authService.login(email, password);
    if (!isLoggedIn) {
      this.errorMessage.set('Invalid credentials. Try admin@contacts.com / Password@123');
      return;
    }

    this.errorMessage.set('');
    void this.router.navigate(['/contacts']);
  }
}
