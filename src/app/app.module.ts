import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { HttpClientXsrfModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RequestCache } from './request-cache.service';
import { CachingInterceptor } from './http-interceptors/caching-interceptor';
import { HttpClientModule , HTTP_INTERCEPTORS}    from '@angular/common/http';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
