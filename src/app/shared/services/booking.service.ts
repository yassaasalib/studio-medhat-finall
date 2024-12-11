import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { Booking, BookingFormData, BookingStatus } from '../types/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly COLLECTION_NAME = 'bookings';
  private bookingsSubject = new BehaviorSubject<Booking[]>([]);
  bookings$ = this.bookingsSubject.asObservable();

  constructor(private firebaseService: FirebaseService) {
    this.loadBookings();
  }

  private async loadBookings(): Promise<void> {
    try {
      const bookings = await this.firebaseService.getDocuments(this.COLLECTION_NAME);
      this.bookingsSubject.next(bookings);
    } catch (error) {
      console.error('Error loading bookings:', error);
      throw error;
    }
  }

  async addBooking(formData: BookingFormData): Promise<Booking> {
    const booking: Booking = {
      ...formData,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    
    try {
      const result = await this.firebaseService.addPublicDocument(this.COLLECTION_NAME, booking);
      return result.data;
    } catch (error) {
      console.error('Error adding booking:', error);
      throw error;
    }
  }
  async updateBooking(id: string, updates: Partial<Booking>): Promise<void> {
    try {
      await this.firebaseService.updateDocument(this.COLLECTION_NAME, id, updates);
      
      const bookings = this.bookingsSubject.value;
      const index = bookings.findIndex(b => b.id === id);
      
      if (index !== -1) {
        bookings[index] = { ...bookings[index], ...updates };
        this.bookingsSubject.next([...bookings]);
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  }

  async deleteBooking(id: string): Promise<void> {
    try {
      await this.firebaseService.deleteDocument(this.COLLECTION_NAME, id);
      
      const bookings = this.bookingsSubject.value;
      this.bookingsSubject.next(bookings.filter(b => b.id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw error;
    }
  }

  async updateStatus(id: string, status: BookingStatus): Promise<void> {
    await this.updateBooking(id, { status });
  }

  getBookings(): Observable<Booking[]> {
    return this.bookings$;
  }

  async queryBookings(
    status?: BookingStatus,
    serviceType?: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<Booking[]> {
    const conditions = [];

    if (status) {
      conditions.push({ field: 'status', operator: '==', value: status });
    }

    if (serviceType) {
      conditions.push({ field: 'serviceType', operator: '==', value: serviceType });
    }

    if (startDate) {
      conditions.push({ field: 'date', operator: '>=', value: startDate.toISOString() });
    }

    if (endDate) {
      conditions.push({ field: 'date', operator: '<=', value: endDate.toISOString() });
    }

    try {
      const bookings = await this.firebaseService.queryDocuments(
        this.COLLECTION_NAME,
        conditions,
        'createdAt'
      );
      return bookings;
    } catch (error) {
      console.error('Error querying bookings:', error);
      throw error;
    }
  }
}