import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {InventoryComponent} from './inventory/inventory.component';
import {BorrowingComponent} from './borrowing/borrowing.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inventory',
    component: InventoryComponent,
    canActivate: [AuthGuard],
    data: { role: 'art-lib-admin' }
    },
  { path: 'borrowing',
    component: BorrowingComponent,
    canActivate: [AuthGuard],
    data: { role: 'art-lib-user'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
