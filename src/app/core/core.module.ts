import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconSvgModule } from '../shared/icon-svg/icon-svg.module';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RetryHttpInterceptor } from './interceptor/http.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, IconSvgModule, MatIconModule],
  exports: [IconSvgModule, MatIconModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryHttpInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
