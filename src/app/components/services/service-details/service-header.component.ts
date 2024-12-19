import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { fadeInUp } from './animations';

@Component({
  selector: 'app-service-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  animations: [fadeInUp],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12" @fadeInUp>
      <div class="relative aspect-[4/3] overflow-hidden rounded-2xl group">
        <img 
          [src]="imageUrl" 
          [alt]="title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div class="space-y-6">
        <h1 class="text-5xl font-light tracking-tight text-white">{{title}}</h1>
        <p class="text-xl text-gray-400">{{description}}</p>
        
        <div class="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-colors hover:bg-white/10">
          <div>
            <span class="block text-gray-400 text-sm">{{ 'services.startingAt' | translate }}</span>
            <span class="text-3xl font-light text-white">{{basePrice | currency:'EGP':'symbol':'1.0-0'}}</span>
          </div>
          <div class="text-right">
            <span class="block text-gray-400 text-sm">{{ 'services.duration' | translate }}</span>
            <span class="text-xl text-white">{{duration}}</span>
          </div>
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-gray-300 leading-relaxed mb-10">
            {{extendedDescription}}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .prose {
      max-width: 65ch;
    }

    @media (prefers-reduced-motion: reduce) {
      .group-hover\:scale-105 {
        transform: none;
      }
    }
  `]
})
export class ServiceHeaderComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() basePrice!: number;
  @Input() duration!: string;
  @Input() extendedDescription!: string;
}