import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../../shared/services/booking.service';
import { Booking, BookingStatus } from '../../../shared/types/booking.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-booking-table',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `

      <!-- Grid layout for cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let booking of bookings" 
             class="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-2xl">
          
          <!-- Status Badge -->
          <div class="relative">
            <div [ngClass]="{
              'bg-yellow-500': booking.status === 'Pending',
              'bg-green-500': booking.status === 'Confirmed',
              'bg-red-500': booking.status === 'Cancelled'
            }" class="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white">
              {{ booking.status }}
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <!-- Customer Info Section -->
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-white mb-2">{{ booking.customerName }}</h2>
              <div class="flex items-center text-gray-400 mb-1">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-sm">{{ booking.email }}</span>
              </div>
              <div class="flex items-center text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-sm">{{ booking.phone }}</span>
              </div>
            </div>

            <!-- Service & Date Section -->
            <div class="mb-6">
              <div class="flex items-center mb-3">
                <svg class="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-white">{{ booking.serviceType | translate }}</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="text-white">{{ booking.date }}</span>
              </div>
            </div>

            <!-- Message Section -->
            <div class="mb-6">
              <p class="text-gray-400 text-sm italic">{{ booking.message || 'No message provided' }}</p>
            </div>

            <!-- Actions Section -->
            <div class="flex items-center justify-between mt-4">
              <select
                [(ngModel)]="booking.status"
                (change)="updateStatus(booking.id!, booking.status)"
                class="bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <button
                (click)="deleteBooking(booking.id!)"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

  `
})
export class BookingTableComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  updateStatus(id: string, status: BookingStatus): void {
    this.bookingService.updateStatus(id, status);
  }

  deleteBooking(id: string): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingService.deleteBooking(id);
    }
  }
}