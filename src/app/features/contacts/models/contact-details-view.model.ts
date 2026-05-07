import { Contact } from './contact.model';
import { ContactEmailAddress } from './contact-email-address.model';

export interface ContactDetailsViewModel {
  contact: Contact;
  emailAddresses: ContactEmailAddress[];
}
