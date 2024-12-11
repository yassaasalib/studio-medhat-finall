import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {
    this.firebaseService.isAuthenticated$.subscribe(
      isAuthenticated => this.isAuthenticatedSubject.next(isAuthenticated)
    );
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      await this.firebaseService.signIn(email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.firebaseService.signOut();
      this.router.navigate(['/admin/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated$;
  }
}