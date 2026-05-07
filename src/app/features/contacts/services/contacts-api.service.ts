import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ContactEmailAddress } from '../models/contact-email-address.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsApiService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiBaseUrl}/contacts`);
  }

  getById(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiBaseUrl}/contacts/${id}`);
  }

  getEmailAddresses(contactId: string): Observable<ContactEmailAddress[]> {
    return this.http.get<ContactEmailAddress[]>(
      `${environment.apiBaseUrl}/contacts/${contactId}/email_addresses`,
    );
  }
}
