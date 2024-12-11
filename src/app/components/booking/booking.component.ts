import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PhotoService } from '../../shared/types/services.interface';
import { PhotoServiceService } from '../../shared/services/photo.service';
import { DateSelectorComponent } from '../../shared/components/date-selector/date-selector.component';
import { BookingService } from '../../shared/services/booking.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    TranslateModule,
    DateSelectorComponent
  ],
  template: `
    <section class="min-h-screen w-full py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-light text-white mb-4">{{ 'booking.title' | translate }}</h2>
          <p class="text-xl text-gray-400">{{ 'booking.subtitle' | translate }}</p>
        </div>

        <div class="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-xl">
          <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="space-y-6">
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
            </div>

            <!-- Service Field -->
            <div>
              <label for="service" class="block text-sm font-medium text-gray-200">
                {{ 'booking.form.service' | translate }}
              </label>
              <select
                id="service"
                formControlName="serviceType"
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="" disabled>{{ 'booking.form.selectService' | translate }}</option>
                <option *ngFor="let service of services" [value]="service.name">
                  {{ service.name | translate }}
                </option>
              </select>
            </div>

            <!-- Date Field -->
            <div>
              <app-date-selector
                [label]="'booking.form.date' | translate"
                [placeholder]="'booking.form.placeholders.date' | translate"
                (dateSelected)="onDateSelected($event)"
              ></app-date-selector>
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
      </div>
    </section>
  `
})
export class BookingComponent {
  bookingForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  services: PhotoService[] = [];

  constructor(
    private fb: FormBuilder,
    private photoService: PhotoServiceService,
    private translate: TranslateService,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      serviceType: ['', Validators.required],
      date: ['', Validators.required],
      message: ['']
    });

    this.photoService.getServices().subscribe(services => {
      this.services = services;
    });
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
          status: 'Pending',
          isPublicSubmission: true
        };

        await this.bookingService.addBooking(formData);
        this.submitSuccess = true;
        this.bookingForm.reset();
        
        // Redirect to confirmation page
        // setTimeout(() => this.router.navigate(['/booking-confirmation']), 2000);
      } catch (error) {
        this.submitError = true;
        console.error('Booking error:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}