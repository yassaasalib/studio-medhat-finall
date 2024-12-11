import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BookingTableComponent } from '../../components/booking-table/booking-table.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, BookingTableComponent],
  template: `
    <div class="min-h-screen bg-black">
      <!-- Header -->
      <header class="bg-neutral-900/50 backdrop-blur-sm border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex justify-between items-center">
            <h1 class="text-xl font-light text-white">Admin Dashboard</h1>
            <button
              (click)="logout()"
              class="px-4 py-2 text-sm text-white hover:text-orange-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <h2 class="text-2xl font-light text-white mb-6">Bookings</h2>
          <app-booking-table></app-booking-table>
        </div>
      </main>
    </div>
  `
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/admin/login']);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}