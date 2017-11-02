import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rotas
import {Routing, RoutingProviders} from './app.routing';

//Root
import { AppComponent } from './app.component';

//Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Pages
import { StepOnePageComponent } from './pages/stepOne-page/stepOne-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { StepTwoPageComponent } from './pages/stepTwo-page/stepTwo-page.component';
import { StepThreePageComponent } from './pages/stepThree-page/stepThree-page.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    FooterComponent,
    StepOnePageComponent,
    HomePageComponent,
    PageHeaderComponent,
    StepTwoPageComponent,
    StepThreePageComponent,
    FinishPageComponent,
    StepOnePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
