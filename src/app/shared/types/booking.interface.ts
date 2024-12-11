export type BookingStatus = 'Pending' | 'Confirmed' | 'Cancelled';

export interface Booking {
  id?: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  serviceType: string;
  message?: string;
  status: BookingStatus;
  createdAt: string;
}

export interface BookingFormData {
  customerName: string;
  email: string;
  phone: string;
  date: string;
  serviceType: string;
  message?: string;
}