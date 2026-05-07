import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { catchError, combineLatest, map, of, shareReplay, startWith, tap } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state';
import { LoaderComponent } from '../../../../shared/components/loader/loader';
import { ContactDetailsComponent } from '../../components/contact-details/contact-details';
import { ContactListComponent } from '../../components/contact-list/contact-list';
import { ContactDetailsViewModel } from '../../models/contact-details-view.model';
import { Contact } from '../../models/contact.model';
import { ContactsApiService } from '../../services/contacts-api.service';

@Component({
  selector: 'app-contacts-page',
  imports: [
    AsyncPipe,
    ContactListComponent,
    ContactDetailsComponent,
    LoaderComponent,
    EmptyStateComponent,
  ],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss',
})
export class ContactsPageComponent implements OnInit {
  private readonly contactsApiService = inject(ContactsApiService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly detailsLoading = signal(false);
  readonly searchText = signal('');
  readonly selectedContact = signal<Contact | null>(null);
  readonly details = signal<ContactDetailsViewModel | null>(null);
  readonly listError = signal('');
  readonly detailsError = signal('');

  private readonly allContacts$ = this.contactsApiService.getAll().pipe(
    tap((contacts) => {
      if (!this.selectedContact() && contacts.length > 0) {
        this.onSelectContact(contacts[0]);
      }
      this.loading.set(false);
    }),
    shareReplay(1),
    catchError((error: Error) => {
      this.loading.set(false);
      this.listError.set(error.message);
      return of([]);
    }),
  );

  readonly contacts$ = combineLatest([
    this.allContacts$,
    toObservable(this.searchText).pipe(startWith('')),
  ]).pipe(map(([contacts]) => this.filterContacts(contacts)));

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.loading.set(true);
    this.allContacts$.subscribe();
  }

  onSearch(searchText: string): void {
    this.searchText.set(searchText);
  }

  onSelectContact(contact: Contact): void {
    this.selectedContact.set(contact);
    this.loadContactDetails(contact);
  }

  loadContactDetails(contact: Contact): void {
    this.detailsLoading.set(true);
    this.detailsError.set('');
    this.details.set(null);
    this.contactsApiService.getEmailAddresses(contact.id).subscribe({
      next: (emailAddresses) => {
        this.details.set({ contact, emailAddresses });
        this.detailsLoading.set(false);
      },
      error: (error: Error) => {
        this.detailsError.set(error.message);
        this.detailsLoading.set(false);
      },
    });
  }

  onLogout(): void {
    this.authService.logout();
    void this.router.navigate(['/login']);
  }

  private filterContacts(contacts: Contact[]): Contact[] {
    const query = this.searchText().toLowerCase().trim();
    if (!query) {
      return contacts;
    }
    return contacts.filter((contact) =>
      `${contact.firstName} ${contact.lastName} ${contact.jobTitle} ${contact.phone} ${contact.mobile}`
        .toLowerCase()
        .includes(query),
    );
  }
}
