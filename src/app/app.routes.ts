import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UserSearchComponent} from './user-search/user-search.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
