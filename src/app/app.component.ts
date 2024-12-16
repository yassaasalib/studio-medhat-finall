import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UniversalLoadingComponent } from './shared/components/loading/universal-loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    UniversalLoadingComponent,
    CommonModule
  ],
  template: `
    <app-universal-loading></app-universal-loading>
    <app-header *ngIf="showHeaderFooter"></app-header>
    <router-outlet></router-outlet>
    <app-footer *ngIf="showHeaderFooter"></app-footer>
    <div class="app-container relative">
    </div>
  `
})
export class App {
  name = 'Photography Portfolio';
  showHeaderFooter: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.activatedRoute;
        
        // Find the last child route
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        
        // Get the showHeaderFooter value from route data
        this.showHeaderFooter = currentRoute.snapshot.data['showHeaderFooter'] ?? true;
        
        // For debugging
        console.log('Current route:', this.router.url);
        console.log('showHeaderFooter:', this.showHeaderFooter);
      }
    });
  }

}