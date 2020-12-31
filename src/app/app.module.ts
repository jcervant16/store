import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { DataApiWebService } from './services/data-api-web.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FuncionesService } from './services/funciones.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CurrencyPipe } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';




registerLocaleData(localeEs, 'es-AR');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
    }),
  ],
  providers: [
    FormBuilder,
    DataApiWebService,
    AuthGuardService,
    FuncionesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
