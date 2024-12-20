import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoServiceService } from '../../../shared/services/photo.service';
import { PhotoService } from '../../../shared/types/services.interface';
import { ScrollService } from '../../../shared/services/scroll.service';
import { PackagesGridComponent } from '../../../shared/components/packages/packages-grid.component';
import { ServiceHeaderComponent } from './service-header.component';
import { StudioDetailsComponent } from './studio-details.component';
import { packagesData } from '../../../shared/data/packages/packages.data';
import { fadeInUp, staggerFadeIn } from './animations';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule,
    PackagesGridComponent,
    ServiceHeaderComponent,
    StudioDetailsComponent
  ],
  animations: [fadeInUp, staggerFadeIn],
  template: `
    <section 
      class="service-details min-h-screen bg-black text-white py-32"
      @fadeInUp>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          (click)="navigateBack()"
          class="group inline-flex items-center mb-12 text-gray-400 hover:text-white transition-colors">
          <svg 
            class="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1 rtl:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          {{ 'services.backToServices' | translate }}
        </button>
        
        <div *ngIf="service" class="space-y-16">
          <app-service-header
          [imageUrl]="service.imageUrl"
          [title]="('services.categories.' + getServiceKey(service) + '.title' | translate) || service.name"
          [description]="('services.categories.' + getServiceKey(service) + '.description' | translate) || service.description"
          [basePrice]="service.basePrice"
          [duration]="service.duration"
          [extendedDescription]="('services.categories.' + getServiceKey(service) + '.extendedDescription' | translate) || service.extendedDescription">
        </app-service-header>

          <app-studio-details
            [details]="service.studioDetails">
          </app-studio-details>

          <div *ngIf="service.promotions?.length" 
               class="text-center space-y-3" 
               @staggerFadeIn>
            <p *ngFor="let promo of service.promotions" 
               class="text-lg text-orange-500 bg-orange-500/10 py-3 px-6 rounded-full inline-block">
              {{promo}}
            </p>
          </div>

          <div class="space-y-8">
            <div class="text-center mb-10">
              <h2 class="text-3xl font-light mb-4">{{ 'services.packages.title' | translate }}</h2>
              <p class="text-xl text-gray-400">{{ 'services.packages.subtitle' | translate }}</p>
            </div>
            
            <app-packages-grid
              [packages]="getPackagesForService(service.id)">
            </app-packages-grid>
          </div>
        </div>
        
        <div *ngIf="!service" class="text-center">
          <p class="text-xl text-gray-400">{{ 'services.notFound' | translate }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .service-details {
      background: linear-gradient(to bottom, #000, #111);
    }

    :host-context([dir="rtl"]) .group-hover\:-translate-x-1 {
      transform: translateX(1px);
    }

    @media (prefers-reduced-motion: reduce) {
      .group-hover\:-translate-x-1 {
        transform: none;
      }
    }
  `]
})
export class ServiceDetailsComponent implements OnInit {
  service?: PhotoService;

  // Map service IDs to translation keys
  private serviceKeyMap: { [key: number]: string } = {
    1: 'family',
    2: 'adultBirthday',
    3: 'childrenBirthday',
    4: 'maternity',
    5: 'fashion',
    6: 'engagement',
    7: 'marriage',
    8: 'graduation',
    9: 'printing',
  };

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoServiceService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.scrollService.scrollToTop();
    
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.photoService.getServiceById(id).subscribe(service => {
        this.service = service;
      });
    });
  }

  getServiceKey(service: PhotoService): string {
    // Use the ID to get the correct translation key
    const translationKey = this.serviceKeyMap[service.id];
    if (!translationKey) {
      console.warn(`No translation key mapping found for service ID: ${service.id}`);
    }
    return translationKey || 'family'; // Default to 'family' if no mapping found
  }
  
  getPackagesForService(serviceId: number) {
    const packageGroup = packagesData.find(group => group.serviceId === serviceId);
    return packageGroup?.packages || [];
  }

  navigateBack(): void {
    this.scrollService.scrollToElement('services');
  }
}