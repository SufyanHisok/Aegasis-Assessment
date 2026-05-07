# Contact Management Frontend (Angular Assessment)

## 1) Tech Versions You Need
This project is built with:

- Angular CLI `21.2.10`
- Angular `21.2.0`
- Node.js `22`
- npm `10+`


## 2) to Run This Project
From the project root, run:

```bash
npm i
```

If installation gives peer dependency issues, run:

```bash
npm i --legacy-peer-deps
```

Then start the app:

```bash
npm start
```

App will run on Angular dev server (default `http://localhost:4200`).

## 3) Test Command
```bash
npm test
```

## 4) What This Assessment Covers
- Login flow with mock authentication
- Protected contact workspace route
- Contact list + contact details split layout
- Search and contact selection behavior
- API integration using MockAPI
- Clean, component-scoped SCSS styling

## 5) Project Structure (Guide)
```text
src/app
  core/
    auth/           # auth service + guards
    interceptors/   # auth + error interceptors
  shared/
    components/     # reusable UI components
  features/
    auth/login/     # login feature
    contacts/       # contacts domain (models/services/pages/components)
```

## 6) Key Implementation Decisions

### Angular Patterns Used
- Standalone components
- New Angular control flow syntax (`@if`, `@for`)
- RxJS for async data handling in feature flows

### Styling Approach
- Custom SCSS per component (not UI-library driven)
- BEM-style class naming for readability and maintainability
- Global tokens in `styles.scss` for consistent colors/spacing/typography

### Authentication + Guards
- Fixed credentials for assessment login:
  - `admin@contacts.com`
  - `Password@123`
- On login, a JWT-like mock token is stored in `localStorage`
- `authGuard` protects `/contacts`
- `authRedirectGuard` prevents logged-in users from going back to `/login`

### Interceptors
- `auth.interceptor.ts`
  - Attaches `Authorization: Bearer <token>` to API requests
  - If token is missing on API calls, user is redirected to `/login`
- `error.interceptor.ts`
  - Centralized HTTP error normalization (clean user-facing errors)

### Shared Components
- Reusable components used across features:
  - `avatar`
  - `loader`
  - `empty-state`
  - `app-button`
  - `app-input`

## 7) Libraries Used
- `@angular/*` (core/router/forms/http)
- `rxjs`
- `typescript`
- `vitest` (unit testing)
- `bootstrap-icons` (social icons)
- Google Material Icons (via CDN)

## 8) API Configuration
Environment file:

- `src/environments/environment.ts`

Current base URL:

- `https://69fc3aacfce564e259178fc1.mockapi.io`

## 9) Notes
- Auth is intentionally simplified for assessment scope.
- Focus is on clean architecture, maintainable UI code, and practical Angular patterns.
