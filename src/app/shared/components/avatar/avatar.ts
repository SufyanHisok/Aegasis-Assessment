import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  @Input() src = '';
  @Input() alt = 'Avatar';
  @Input() size = 40;
  @Input() shape: 'circle' | 'rounded' = 'circle';

  get initials(): string {
    return this.alt
      .split(' ')
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
