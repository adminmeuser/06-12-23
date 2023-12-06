import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth.guard'; 
import { CanActivateChildGuard } from './child.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CanMatchGuard } from './can-match.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    CanActivateChildGuard,
    CanDeactivateGuard,
    CanMatchGuard,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
