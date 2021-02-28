import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

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
import { PastBorrowingsComponent } from './borrowing/past-borrowings/past-borrowings.component';

import {AuthService} from './auth/auth.service';
import { ArtworkListComponent } from './inventory/artwork-list/artwork-list.component';
import { ArtworkDetailComponent } from './inventory/artwork-detail/artwork-detail.component';
import { ArtworkItemComponent } from './inventory/artwork-list/artwork-item/artwork-item.component';
import { ArtworkEditComponent } from './inventory/artwork-edit/artwork-edit.component';

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
    PastBorrowingsComponent,
    ArtworkListComponent,
    ArtworkDetailComponent,
    ArtworkItemComponent,
    ArtworkEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
