import { Routes } from '@angular/router';
import { authGuard, authRedirectGuard } from './core/auth/auth.guard';
import { LoginComponent } from './features/auth/login/login';
import { ContactsPageComponent } from './features/contacts/pages/contacts-page/contacts-page';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsPageComponent, canActivate: [authGuard] },
  { path: '', pathMatch: 'full', canActivate: [authRedirectGuard], component: LoginComponent },
  { path: '**', redirectTo: 'contacts' },
];
