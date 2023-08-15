import { AccountService } from './account.service';
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';

@Injectable()
class UserToken {
}

@Injectable()
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

const canActivateTeam: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PermissionsService).canActivate(inject(UserToken), route.params['id']);
    };