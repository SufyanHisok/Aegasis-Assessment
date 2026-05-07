import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // In production, this should integrate with a toast/notification and centralized logging service.
      console.error('API request failed:', error);

      const friendlyMessage =
        error.status === 0
          ? 'Network error. Please check your internet connection.'
          : error.error?.message || 'Something went wrong while processing your request.';

      return throwError(() => new Error(friendlyMessage));
    }),
  );
