import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-black flex items-center justify-center px-4">
      <div class="max-w-md w-full space-y-8 bg-neutral-900/50 p-8 rounded-xl backdrop-blur-sm border border-white/10">
        <div class="text-center">
          <h2 class="text-3xl font-light text-white">Admin Login</h2>
          <p class="mt-2 text-sm text-gray-400">Sign in to access the dashboard</p>
        </div>

        <form class="mt-8 space-y-6" (ngSubmit)="onSubmit()">
          <div class="space-y-4">
            <div>
              <label for="email" class="text-sm font-medium text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                [(ngModel)]="email"
                name="email"
                required
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label for="password" class="text-sm font-medium text-gray-300">Password</label>
              <input
                id="password"
                type="password"
                [(ngModel)]="password"
                name="password"
                required
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div class="flex items-center">
              <input
                id="remember"
                type="checkbox"
                [(ngModel)]="rememberMe"
                name="remember"
                class="h-4 w-4 rounded border-gray-600 bg-black/30 text-orange-500 focus:ring-orange-500"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-300">Remember me</label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              [disabled]="isSubmitting"
              class="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>

          <div *ngIf="error" class="text-red-500 text-center text-sm">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  `
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  error: string = '';
  isSubmitting: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit(): Promise<void> {
    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.isSubmitting = true;
    this.error = '';

    try {
      const success = await this.authService.login(this.email, this.password);
      if (success) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.error = 'Invalid email or password';
      }
    } catch (error) {
      this.error = 'Authentication failed. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}