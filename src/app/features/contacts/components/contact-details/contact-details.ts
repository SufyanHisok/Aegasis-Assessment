import { Component, Input } from '@angular/core';
import { ContactDetailsViewModel } from '../../models/contact-details-view.model';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-contact-details',
  imports: [AvatarComponent, EmptyStateComponent],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.scss',
})
export class ContactDetailsComponent {
  @Input() details: ContactDetailsViewModel | null = null;
  @Input() errorMessage = '';
}
