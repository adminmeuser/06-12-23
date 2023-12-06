import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private router: Router) { }

  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  login(username: string, password: string, isAdmin: boolean): boolean {
    const validAdminCredentials = { username: 'admin', password: 'admin123' };
    const validUserCredentials = { username: 'user', password: 'user123' };

    if (isAdmin && username === validAdminCredentials.username && password === validAdminCredentials.password) {
      this.isAuthenticated = true;
      this.isAdmin = true;
    } else if (!isAdmin && username === validUserCredentials.username && password === validUserCredentials.password) {
      this.isAuthenticated = true;
      this.isAdmin = false;
    } else {
      this.isAuthenticated = false;
      this.isAdmin = false;
    }

    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.isAdmin = false;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  getRouter(): Router {
    return this.router;
  }
}

