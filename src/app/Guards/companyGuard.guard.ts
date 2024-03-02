import { CanActivateFn } from '@angular/router';
import {  ActivatedRouteSnapshot,  CanActivate,  Router,  RouterStateSnapshot,  UrlTree,} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class companyGuard implements CanActivate {
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
    const isCompany = this.authService.getRole() === 'company' ;

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
      if (!isCompany) {
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