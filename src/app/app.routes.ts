import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';
import { AdminLoginComponent } from './admin/pages/login/login.component';
import { AdminDashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AuthGuard } from './admin/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { 
    path: 'admin/dashboard', 
    component: AdminDashboardComponent,
    canActivate: [AuthGuard] 
  },
  // Redirect unknown routes to the home page
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
