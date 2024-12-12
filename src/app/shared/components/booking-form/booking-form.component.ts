import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BookingService } from '../../services/booking.service';
import { ServicePackage } from '../../types/package.interface';
import { PhotoService } from '../../types/services.interface';
import { DateSelectorComponent } from '../date-selector/date-selector.component';
import { ServiceDetailsComponent } from './service-details.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    DateSelectorComponent,
    ServiceDetailsComponent
  ],
  template: `
    <div class="booking-form bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6">
      <h3 class="text-2xl font-light text-white mb-6">{{ 'booking.title' | translate }}</h3>
      
      <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <!-- Service Details -->
        <app-service-details
          [service]="selectedService"
          [package]="selectedPackage">
        </app-service-details>

        <!-- Name Field -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-200">
            {{ 'booking.form.name' | translate }}
          </label>
          <input
            type="text"
            id="name"
            formControlName="customerName"
            class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            [placeholder]="'booking.form.placeholders.name' | translate"
          />
          <div *ngIf="bookingForm.get('customerName')?.touched && bookingForm.get('customerName')?.invalid" 
               class="text-red-500 text-sm mt-1">
            {{ 'booking.form.errors.nameRequired' | translate }}
          </div>
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-200">
            {{ 'booking.form.email' | translate }}
          </label>
          <input
            type="email"
            id="email"
            formControlName="email"
            class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            [placeholder]="'booking.form.placeholders.email' | translate"
          />
          <div *ngIf="bookingForm.get('email')?.touched && bookingForm.get('email')?.invalid" 
               class="text-red-500 text-sm mt-1">
            {{ 'booking.form.errors.emailInvalid' | translate }}
          </div>
        </div>

        <!-- Phone Field -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-200">
            {{ 'booking.form.phone' | translate }}
          </label>
          <input
            type="tel"
            id="phone"
            formControlName="phone"
            class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            [placeholder]="'booking.form.placeholders.phone' | translate"
          />
          <div *ngIf="bookingForm.get('phone')?.touched && bookingForm.get('phone')?.invalid" 
               class="text-red-500 text-sm mt-1">
            {{ 'booking.form.errors.phoneInvalid' | translate }}
          </div>
        </div>

        <!-- Date Field -->
        <div>
          <app-date-selector
            [label]="'booking.form.date' | translate"
            [placeholder]="'booking.form.placeholders.date' | translate"
            (dateSelected)="onDateSelected($event)"
          ></app-date-selector>
          <div *ngIf="bookingForm.get('date')?.touched && bookingForm.get('date')?.invalid" 
               class="text-red-500 text-sm mt-1">
            {{ 'booking.form.errors.dateRequired' | translate }}
          </div>
        </div>

        <!-- Message Field -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-200">
            {{ 'booking.form.message' | translate }}
            <span class="text-gray-400 text-xs">
              ({{ 'booking.form.optional' | translate }})
            </span>
          </label>
          <textarea
            id="message"
            formControlName="message"
            rows="4"
            class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            [placeholder]="'booking.form.placeholders.message' | translate"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          [disabled]="bookingForm.invalid || isSubmitting"
          class="w-full py-4 px-6 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <span *ngIf="!isSubmitting">{{ 'booking.form.submit' | translate }}</span>
          <span *ngIf="isSubmitting">{{ 'booking.form.submitting' | translate }}</span>
        </button>

        <!-- Success Message -->
        <div *ngIf="submitSuccess" class="text-green-500 text-center animate-fade-in">
          {{ 'booking.form.success' | translate }}
        </div>

        <!-- Error Message -->
        <div *ngIf="submitError" class="text-red-500 text-center animate-fade-in">
          {{ 'booking.form.error' | translate }}
        </div>
      </form>
    </div>
  `
})
export class BookingFormComponent implements OnInit {
  @Input() selectedService?: PhotoService;
  @Input() selectedPackage?: ServicePackage;

  bookingForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      email: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', [Validators.required]],
      message: [''],
      serviceType: [''],
      packageName: [''],
      packagePrice: [0]
    });
  }

  ngOnInit() {
    if (this.selectedService) {
      this.bookingForm.patchValue({
        serviceType: this.selectedService.name
      });
    }

    if (this.selectedPackage) {
      this.bookingForm.patchValue({
        packageName: this.selectedPackage.name,
        packagePrice: this.selectedPackage.price
      });
    }
  }

  onDateSelected(date: Date) {
    this.bookingForm.patchValue({ date });
  }

  async onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        const formData = {
          ...this.bookingForm.value,
          date: format(new Date(this.bookingForm.value.date), 'PPP'),
          status: 'Pending'
        };

        await this.bookingService.addBooking(formData);
        this.submitSuccess = true;

        // Clear the form and reset
        this.bookingForm.reset();

        // Optionally redirect to a confirmation page or admin dashboard
        setTimeout(() => this.router.navigate(['/']), 2000);
      } catch (error) {
        this.submitError = true;
        console.error('Booking error:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}