/*import { HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ErrorHandleService } from './error-handle.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorHandleService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = '';

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return next.handle(authReq).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.error('Unauthorized request:', err);
          } else {
            console.error('HTTP error:', err);
          }
        } else {
          console.error('An error occurred:', err);
        }

        this.errorService.handleError(err);

        return throwError(() => err);
      })
    );
  }
} 
*/
import { HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ErrorHandleService } from './error-handle.service';
import { Injectable } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorHandleService, private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the token from localStorage
    const token = localStorage.getItem('jwt_token');

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(authReq).pipe(
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.error('Unauthorized request:', err);
            } else {
              console.error('HTTP error:', err);
            }
          } else {
            console.error('An error occurred:', err);
          }

          this.errorService.handleError(err);

          return throwError(() => err);
        })
      );
    } else {
      // Handle case where token is not available in localStorage
      console.error('JWT token is not available in localStorage.');
      return next.handle(req);
    }
  }
}
