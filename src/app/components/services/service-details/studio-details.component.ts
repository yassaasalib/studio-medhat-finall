import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StudioDetails } from '../../../shared/types/services.interface';
import { scaleIn } from './animations';

@Component({
  selector: 'app-studio-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  animations: [scaleIn],
  template: `
    <div 
      class="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-neutral-900/60 transition-colors duration-300"
      @scaleIn>
      <h2 class="text-2xl font-light mb-8 text-white">{{ 'services.studioDetails.title' | translate }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="group">
            <h3 class="text-lg font-medium text-orange-500 mb-3 group-hover:text-orange-400 transition-colors">
              {{ 'services.studioDetails.hours' | translate }}
            </h3>
            <p class="text-gray-300">{{details.hours}}</p>
          </div>
          
          <div class="group">
            <h3 class="text-lg font-medium text-orange-500 mb-3 group-hover:text-orange-400 transition-colors">
              {{ 'services.studioDetails.location' | translate }}
            </h3>
            <p class="text-gray-300">{{details.location}}</p>
          </div>
        </div>
        
        <div class="space-y-6">
          <div class="group">
            <h3 class="text-lg font-medium text-orange-500 mb-3 group-hover:text-orange-400 transition-colors">
              {{ 'services.studioDetails.policies' | translate }}
            </h3>
            <ul class="space-y-2">
              <li *ngFor="let policy of details.policies" 
                  class="flex items-start text-gray-300">
                <span class="text-orange-500 mr-2">•</span>
                {{policy}}
              </li>
            </ul>
          </div>
          
          <div class="group">
            <h3 class="text-lg font-medium text-orange-500 mb-3 group-hover:text-orange-400 transition-colors">
              {{ 'services.studioDetails.notes' | translate }}
            </h3>
            <ul class="space-y-2">
              <li *ngFor="let note of details.notes" 
                  class="flex items-start text-gray-300">
                <span class="text-orange-500 mr-2">•</span>
                {{note}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StudioDetailsComponent {
  @Input() details!: StudioDetails;
}