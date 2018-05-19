import { UserSectionComponent } from './user-section/user-section.component';
import { AdminAuthGuardService as AdminAuthGuard} from './auth/admin-auth-guard.service';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminSectionComponent,
        canActivate: [AuthGuard,AdminAuthGuard]
    },
    {
        path: 'user',
        component: UserSectionComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
