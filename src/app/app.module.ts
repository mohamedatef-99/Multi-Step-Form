import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './Components/info/info.component';
import { PlanComponent } from './Components/plan/plan.component';
import { AddOnsComponent } from './Components/add-ons/add-ons.component';
import { SummeryComponent } from './Components/summery/summery.component';
import { ParentComponent } from './Components/parent/parent.component';
import { SuccessComponent } from './Components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PlanComponent,
    AddOnsComponent,
    SummeryComponent,
    ParentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
