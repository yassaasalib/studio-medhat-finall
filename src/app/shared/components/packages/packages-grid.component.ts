import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from './package-card.component';
import { ServicePackage } from '../../types/package.interface';

@Component({
  selector: 'app-packages-grid',
  standalone: true,
  imports: [CommonModule, PackageCardComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      <app-package-card
        *ngFor="let package of packages"
        [package]="package">
      </app-package-card>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackagesGridComponent {
  @Input() packages: ServicePackage[] = [];
}