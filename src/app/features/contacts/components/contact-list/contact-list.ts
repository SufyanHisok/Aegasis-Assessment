import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-contact-list',
  imports: [AvatarComponent, EmptyStateComponent],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactListComponent {
  @Input({ required: true }) contacts: Contact[] = [];
  @Input() searchText = '';
  @Input() selectedContactId: string | null = null;
  @Input() isLoading = false;

  @Output() search = new EventEmitter<string>();
  @Output() selectContact = new EventEmitter<Contact>();
  @Output() logout = new EventEmitter<void>();

  onSearch(value: string): void {
    this.search.emit(value);
  }

  onSelectContact(contact: Contact): void {
    this.selectContact.emit(contact);
  }

  trackByContactId(_: number, contact: Contact): string {
    return contact.id;
  }
}
