import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('stores token on valid login', () => {
    const result = service.login('admin@contacts.com', 'Password@123');
    expect(result).toBe(true);
    expect(service.isAuthenticated()).toBe(true);
  });

  it('does not login with invalid credentials', () => {
    const result = service.login('wrong@mail.com', '123456');
    expect(result).toBe(false);
    expect(service.isAuthenticated()).toBe(false);
  });
});
