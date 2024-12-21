import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ServicePackage } from '../../types/package.interface';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { PhotoService } from '../../types/services.interface';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, BookingFormComponent],
  template: `
    <div 
      class="package-card relative p-6 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-500/50"
      [class.popular]="package.isPopular">
      <!-- Popular badge -->
      <div 
        *ngIf="package.isPopular"
        class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
        {{ 'packages.mostPopular' | translate }}
      </div>
      
      <!-- Package header -->
      <div class="text-center mb-6">
        <h3 class="text-xl font-medium text-white mb-2">
          {{ package?.name ? ('packages.' + package.name.toUpperCase() + '.name' | translate) : '' }}
        </h3>
        <div class="text-3xl font-light text-orange-500">
          {{ package.price | currency:'EGP':'symbol':'1.0-0' }}
        </div>
      </div>

      <!-- Features list -->
      <ul class="space-y-3 mb-6">
        <li 
          *ngFor="let featureKey of package.featureKeys"
          class="flex items-start text-gray-300">
          <svg 
            class="w-5 h-5 text-orange-500 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path 
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7">
            </path>
          </svg>
          <span>{{ featureKey | translate}}</span>
        </li>
      </ul>

      <!-- Book button -->
      <button
        (click)="onBookNow()"
        class="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300">
        {{ 'packages.bookNow' | translate }}
      </button>

    </div>
    <!-- Full-screen Booking Form Modal -->
    <div 
      *ngIf="showBookingForm"
      class="booking-modal fixed inset-0 w-full h-full bg-black/95 z-50 overflow-y-auto">
      <div class="min-h-screen w-full flex flex-col">
        <!-- Modal Header -->
        <div class="sticky top-0 w-full bg-black/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-white/10">
          <h2 class="text-xl text-white font-medium">
            {{ package.name ? ('packages.' + package.name.toUpperCase() + '.name' | translate) : '' }}
          </h2>
          <button
            (click)="showBookingForm = false"
            class="text-white hover:text-orange-500 transition-colors p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <!-- Modal Content -->
        <div class="flex-1 p-4 sm:p-6 md:p-8 flex justify-center">
          <div class="w-full max-w-4xl">
            <app-booking-form
              [selectedService]="service"
              [selectedPackage]="package">
            </app-booking-form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .package-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .package-card.popular {
      border-color: rgba(249, 115, 22, 0.3);
      transform: scale(1.05);
    }
    .booking-modal {
      animation: modalFadeIn 0.3s ease-out;
    }
    button {
      margin-top: auto;
    }
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .package-card,
      .booking-modal {
        animation: none;
        transition: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackageCardComponent {
  @Input() package!: ServicePackage;
  @Input() service!: PhotoService;
  showBookingForm = false;

  onBookNow() {
    this.showBookingForm = true;
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeBookingForm() {
    this.showBookingForm = false;
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  }
}