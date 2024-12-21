import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRowComponent } from './scroll-row.component';
import { CloudComponent } from './cloud.component';

@Component({
  selector: 'app-scroll-gallery',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ScrollRowComponent,
    CloudComponent
  ],
  template: `
    <section class="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
      <!-- Gallery Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-light text-white">
          {{ 'header.gallery' | translate }}
        </h2>
      </div>

      <!-- Decorative Clouds -->
      <app-cloud position="left" top="10%" [opacity]="0.02"></app-cloud>
      <app-cloud position="right" top="25%" [opacity]="0.03"></app-cloud>
      <app-cloud position="left" top="45%" [opacity]="0.02"></app-cloud>
      <app-cloud position="right" top="65%" [opacity]="0.03"></app-cloud>
      <app-cloud position="left" top="85%" [opacity]="0.02"></app-cloud>
      
      <!-- Left shadow overlay -->
      <div class="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
      
      <!-- Right shadow overlay -->
      <div class="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
      
      <!-- Gallery content -->
      <div class="relative space-y-8">
        <app-scroll-row 
          [images]="row1Images" 
          [direction]="'rtl'">
        </app-scroll-row>
        
        <app-scroll-row 
          [images]="row2Images" 
          [direction]="'ltr'">
        </app-scroll-row>

        <app-scroll-row 
          [images]="row3Images" 
          [direction]="'rtl'">
        </app-scroll-row>

        <app-scroll-row 
          [images]="row4Images" 
          [direction]="'ltr'">
        </app-scroll-row>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollGalleryComponent {
  row1Images = [
    '../../../assets/galary/christmas-1.jpg',
    '../../../assets/galary/christmas-2.jpg',
    '../../../assets/galary//christmas-3.jpg',
    '../../../assets/galary//christmas-4.jpg',
    '../../../assets/galary//christmas-5.jpg',
    '../../../assets/galary//christmas-6.jpg'
  ];

  row2Images = [
    '../../../assets/galary/adultBirthday-1.jpg',
    '../../../assets/galary/adultBirthday-2.jpg',
    '../../../assets/galary/adultBirthday-3.jpg',
    '../../../assets/galary/adultBirthday-4.jpg',
    '../../../assets/galary/adultBirthday-5.jpg',
    '../../../assets/galary/adultBirthday-6.jpg',
    '../../../assets/galary/adultBirthday-7.jpg',
    '../../../assets/galary/adultBirthday-8.jpg',
    '../../../assets/galary/adultBirthday-9.jpg',
    '../../../assets/galary/adultBirthday-10.jpg',
    '../../../assets/galary/adultBirthday-11.jpg',
    '../../../assets/galary/adultBirthday-12.jpg',
    '../../../assets/galary/adultBirthday-13.jpg',
    '../../../assets/galary/adultBirthday-14.jpg',
  ];

  row3Images = [
    '../../../assets/galary/kids-1.jpg',
    '../../../assets/galary/kids-2.jpg',
    '../../../assets/galary/kids-3.jpg',
    '../../../assets/galary/kids-4.jpg',
    '../../../assets/galary/kids-5.jpg',
    '../../../assets/galary/kids-6.jpg',
    '../../../assets/galary/kids-7.jpg',
    '../../../assets/galary/kids-8.jpg',
    '../../../assets/galary/kids-9.jpg',
    '../../../assets/galary/kids-10.jpg',
    '../../../assets/galary/kids-11.jpg',
    '../../../assets/galary/kids-12.jpg',
  ];

  row4Images = [
    '../../../assets/galary/marriage-1.jpg',
    '../../../assets/galary/marriage-2.jpg',
    '../../../assets/galary/marriage-3.jpg',
    '../../../assets/galary/marriage-4.jpg',
    '../../../assets/galary/marriage-5.jpg',
    '../../../assets/galary/marriage-6.jpg',
    '../../../assets/galary/marriage-7.jpg',
    '../../../assets/galary/marriage-8.jpg',
    '../../../assets/galary/marriage-9.jpg',
    '../../../assets/galary/marriage-10.jpg',
    '../../../assets/galary/marriage-11.jpg',
    '../../../assets/galary/marriage-12.jpg',
  ];
}