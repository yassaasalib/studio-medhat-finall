import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';
import { AdminLoginComponent } from './admin/pages/login/login.component';
import { AdminDashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AuthGuard } from './admin/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HeroComponent, data: { showHeaderFooter: true } },
  { path: 'services', component: ServicesComponent, data: { showHeaderFooter: true } },
  { path: 'services/:id', component: ServiceDetailsComponent, data: { showHeaderFooter: true } },
  { path: 'admin/login', component: AdminLoginComponent, data: { showHeaderFooter: false } },
  { 
    path: 'admin/dashboard', 
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { showHeaderFooter: false }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

