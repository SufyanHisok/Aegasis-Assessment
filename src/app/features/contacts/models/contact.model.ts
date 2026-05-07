export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle?: string;
  company?: string;
  avatarUrl?: string;
  status?: 'online' | 'away' | 'offline';
  bio?: string;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  mobile?: string;
  meetingUrl?: string;
  socialLinks?: {
    facebook?: string;
    pinterest?: string;
    twitter?: string;
    linkedin?: string;
    google?: string;
  };
}
