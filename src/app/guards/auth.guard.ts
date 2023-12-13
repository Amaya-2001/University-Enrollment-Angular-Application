import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toast = inject(NgToastService);

  if (!authService.isLoggedIn()) {
    router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    toast.error({ detail: "Error", summary: "Please Login First!" });
    return false;
  }
  return true;
};