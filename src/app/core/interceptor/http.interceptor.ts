import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, retry, timer } from 'rxjs';

const MAX__ADDITIONAL_ATTEMPTS = 3;
const BASE_DELAY_TIME = 1000; //1s

// Only retry requests with these specific response error codes
const ALLOWED_HTTP_CODES = [
  HttpStatusCode.RequestTimeout,
  HttpStatusCode.BadGateway,
  HttpStatusCode.ServiceUnavailable,
  HttpStatusCode.GatewayTimeout,
];

@Injectable()
export class RetryHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        retry({ count: MAX__ADDITIONAL_ATTEMPTS, delay: (error, retryCount) => this.shouldRetry(error, retryCount) }),
      );
  }

  /**
   * When response status in allowed list: returns the delay time for the next request
   *
   * When response status is not in allowed list: throws error
   *
   * @param error http error response
   * @param retryCount current retry number
   * @returns delay time for the next request
   */
  shouldRetry(error: HttpErrorResponse, retryCount: number) {
    if (ALLOWED_HTTP_CODES.includes(error.status)) {
      return timer(retryCount * BASE_DELAY_TIME);
    }

    throw error;
  }
}

