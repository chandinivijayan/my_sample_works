import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './full/full.component';
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MatSidenavModule,
    LayoutsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
