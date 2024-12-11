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
    <div class="package-card relative p-6 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-500/50"
         [class.popular]="package.isPopular">
      <!-- Popular badge -->
      <div *ngIf="package.isPopular" 
           class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
        {{ 'packages.mostPopular' | translate }}
      </div>

      <!-- Package header -->
      <div class="text-center mb-6">
        <h3 class="text-xl font-medium text-white mb-2">{{ 'packages.' + package.name.toLowerCase() + '.name' | translate }}</h3>
        <div class="text-3xl font-light text-orange-500">
          {{ package.price | currency:'EGP':'symbol':'1.0-0' }}
        </div>
      </div>

      <!-- Features list -->
      <ul class="space-y-3 mb-6">
        <li *ngFor="let feature of package.features" 
            class="flex items-start text-gray-300">
          <svg class="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M5 13l4 4L19 7">
            </path>
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <!-- Book button -->
      <button 
        (click)="onBookNow()"
        class="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300">
        {{ 'packages.bookNow' | translate }}
      </button>

      <!-- Booking Form Modal -->
      <div *ngIf="showBookingForm" 
           class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <div class="max-w-2xl w-full relative">
          <button 
            (click)="showBookingForm = false"
            class="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <app-booking-form
            [selectedService]="service"
            [selectedPackage]="package">
          </app-booking-form>
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

    button {
      margin-top: auto;
    }

    @media (prefers-reduced-motion: reduce) {
      .package-card {
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
  }
}