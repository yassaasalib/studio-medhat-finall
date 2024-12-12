import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoService } from '../../types/services.interface';
import { ServicePackage } from '../../types/package.interface';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="bg-black/20 rounded-lg p-4">
      <div class="text-orange-500">
        {{ getServiceTitle(service) | translate }}
      </div>
      <div *ngIf="package" class="text-sm text-gray-400 mt-1">
      {{ ('packages.' + package.name.toUpperCase() + '.name') | translate }} - 
        {{ package.price | currency:'EGP':'symbol':'1.0-0' }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailsComponent {
  @Input() service?: PhotoService;
  @Input() package?: ServicePackage;

  getServiceTitle(service?: PhotoService): string {
    if (!service) return '';
    return service.name;
  }
}