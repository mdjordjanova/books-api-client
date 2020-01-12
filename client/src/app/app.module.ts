import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthGuardService } from './shared/guards/AuthGuardService';
import { BookModule } from './components/book/book.module';
import { RerouteGuardService } from './shared/guards/RerouteGuardService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SharedModule,
    BookModule
  ],
  providers: [
    AuthGuardService,
    RerouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
