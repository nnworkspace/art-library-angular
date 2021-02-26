import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { NewBorrowingComponent } from './borrowing/new-borrowing/new-borrowing.component';
import { CurrentBorrowingComponent } from './borrowing/current-borrowing/current-borrowing.component';
import { PastBorrowingComponent } from './borrowing/past-borrowing/past-borrowing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    BorrowingComponent,
    NewBorrowingComponent,
    CurrentBorrowingComponent,
    PastBorrowingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
