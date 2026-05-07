import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'assessment_auth_token';
  private readonly validEmail = 'admin@contacts.com';
  private readonly validPassword = 'Password@123';
  private readonly mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWI';

  // Simplified auth for assessment only. In production, this would use backend APIs and secure tokens.
  login(email: string, password: string): boolean {
    const canLogin = email === this.validEmail && password === this.validPassword;
    if (!canLogin) {
      return false;
    }
    localStorage.setItem(this.tokenKey, this.mockToken);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem(this.tokenKey));
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
