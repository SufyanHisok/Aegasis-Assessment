# Contact Management Frontend (Angular Assessment)

## This project is built with:

- Angular CLI `21.2.10`
- Angular `21.2.0`
- Node.js `22`
- npm `10+`


## to Run This Project
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





## Implementations

### Angular Patterns Used
- Standalone components
- New Angular control flow syntax (`@if`, `@for`)
- RxJS for async data handling in feature flows

### Styling Approach
- Custom SCSS per component (not UI-library driven)
- BEM-style structure for class naming for readability and maintainability
- Global tokens in `styles.scss` for consistent colors/spacing/typography

### Authentication + Guards
- Fixed credentials for assessment login:
  - `admin@contacts.com`
  - `Password@123`
- On login, a JWT-like mock token is stored in `localStorage`
- `authGuard` protects `/contacts`
- `authRedirectGuard` prevents logged-in users from going back to `/login`
-the reason i created this login page (which was not included in the assessment becuase i wanted to implement/show the reviewer things related to authGuard and routes )


### Interceptors
- `auth.interceptor.ts`
  - Attaches `Authorization: Bearer <token>` to API requests
  - If token is missing on API calls, user is redirected to `/login`
- `error.interceptor.ts`
  - Centralized HTTP error normalization (clean user-facing errors) (for a structured large app)

### Shared Components
- Reusable components used across features:
  - `avatar`
  - `loader`
  - `empty-state`
  - `app-button`
  - `app-input`

##  Libraries Used
- `@angular/*` (core/router/forms/http)
- `rxjs`
- `typescript`
- `vitest` (unit testing)
- `bootstrap-icons` (social icons)
- Google Material Icons (via CDN)



## Notes
- added login page (which was not in scope) for authguard and routes behavior.
- adjusted some ui like alignment of contact header so the ui might look a 2-5% different then the provided figma design 
- Focus is on clean architecture, maintainable UI code, and practical Angular patterns.
