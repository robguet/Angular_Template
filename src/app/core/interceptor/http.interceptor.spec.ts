import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RetryHttpInterceptor } from './http.interceptor';

describe('RetryHttpInterceptor', () => {
  let interceptor: RetryHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RetryHttpInterceptor, { provide: HTTP_INTERCEPTORS, useClass: RetryHttpInterceptor, multi: true }],
    });
  });

  it('should be created', () => {
    interceptor = TestBed.inject(RetryHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should not throw the error when the status is 502', () => {
    const error = { status: 502, message: 'Error' } as HttpErrorResponse;
    expect(() => interceptor.shouldRetry(error, 1)).not.toThrow();
  });

  it('should throw the error response when the status is not on the retry-able list', () => {
    const error = { status: 401, message: 'Error' } as HttpErrorResponse;
    expect(() => interceptor.shouldRetry(error, 1)).toThrow();
  });
});

