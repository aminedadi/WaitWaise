import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class clientGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const jwtToken = this.authService.getToken();
    const decodedToken: any =
      this.authService.getToken() != null
        ? jwt_decode.jwtDecode(jwtToken as string)
        : null;
    const userRole = decodedToken != null ? decodedToken.Role : null;
    console.log('role ' + userRole);
    console.log('routeData ' +  JSON.stringify(route.data));
    const isClient = this.authService.getRole() === 'client' ;

    if (!jwtToken /* || this.jwtHelper.isTokenExpired(jwtToken) */) {
      // Check if the token is missing or expired
      /* if (this.jwtHelper.isTokenExpired(this.authService.getToken())) {
       alert(
          'Your session has expired. Please log in again.' );
        this.authService.signOut();
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url },
        });
      } else { */
        alert('Access Denied!');
       
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url }});
       

      /* } */
    } else {
      if (!isClient) {
        // Check if the user's role is not granted access
       alert('Access Denied! Role Not Granted.');
        this.router.navigate(['/'], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      } else {
        return true;
      }
    }
    return true;
  }
}