import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../../shared/services/booking.service';
import { Booking, BookingStatus } from '../../../shared/types/booking.interface';

@Component({
  selector: 'app-booking-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-800">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              ID
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Customer
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Service
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Message
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800">
          <tr *ngFor="let booking of bookings">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              {{ booking.id }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-white">{{ booking.customerName }}</div>
              <div class="text-sm text-gray-400">{{ booking.email }}</div>
              <div class="text-sm text-gray-400">{{ booking.phone }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              {{ booking.serviceType }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              {{ booking.date }}
            </td>
            <td class="px-6 py-4 text-sm text-gray-300">
              {{ booking.message || 'No message' }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <select
                [(ngModel)]="booking.status"
                (change)="updateStatus(booking.id!, booking.status)"
                class="bg-black/30 border border-gray-600 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <button
                (click)="deleteBooking(booking.id!)"
                class="text-red-500 hover:text-red-400 transition-colors"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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