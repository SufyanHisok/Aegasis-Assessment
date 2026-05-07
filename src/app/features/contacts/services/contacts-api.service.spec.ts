import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ContactsApiService } from './contacts-api.service';

describe('ContactsApiService', () => {
  let service: ContactsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ContactsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('calls getAll contacts endpoint', () => {
    service.getAll().subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/contacts'));
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
