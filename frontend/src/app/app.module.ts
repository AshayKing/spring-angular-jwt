import { AdminAuthGuardService } from './auth/admin-auth-guard.service';
import { DataService } from './services/data.service';
import { RoleGuardService } from './auth/role-guard.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { AuthService } from './auth/auth.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    UserSectionComponent,
    AdminSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuardService,
    AdminAuthGuardService,
    RoleGuardService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
