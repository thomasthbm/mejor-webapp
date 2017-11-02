import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { StepOnePageComponent } from './pages/stepOne-page/stepOne-page.component';
import { StepTwoPageComponent } from './pages/stepTwo-page/stepTwo-page.component';
import { StepThreePageComponent } from './pages/stepThree-page/stepThree-page.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'stepone', component: StepOnePageComponent },
    { path: 'steptwo', component: StepTwoPageComponent },
    { path: 'stepthree', component: StepThreePageComponent },
    { path: 'finish', component: FinishPageComponent }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
