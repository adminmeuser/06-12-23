import { CanMatchFn, CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};

@Injectable({
  providedIn: 'root',
})
export class CanMatchGuard implements CanLoad {
  router: any;
  constructor(private authenticationService: AuthenticationService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const isUserAuthenticated = this.authenticationService.isAuthenticatedUser();

    if (!isUserAuthenticated) {
      this.router.navigate(['/login']);
    }

    return isUserAuthenticated; 
  }
}
