import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log("Canload em ação");
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
