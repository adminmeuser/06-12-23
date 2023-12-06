import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService) {}
username: string = '';
password: string = '';
isAdmin: boolean = false;
  login(username: string, password: string, isAdmin: boolean): void {
    if (username && password && (isAdmin || !isAdmin)) {
      const isAuthenticated = this.authenticationService.login(username, password, isAdmin);

      if (isAuthenticated) {
        // Redirect to appropriate dashboard
        isAdmin ? this.authenticationService.getRouter().navigate(['/admin-dashboard']) : this.authenticationService.getRouter().navigate(['/user-dashboard']);
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Please select the option and provide valid credentials');
    }
  }

  cancel(): void {
    // return window.confirm('Are you sure you want to cancel?');
    const isConfirmed = window.confirm('Are you sure you want to cancel?');
    if (isConfirmed) {
      this.username = ''; 
      this.password = ''; 
    }
  }

}
