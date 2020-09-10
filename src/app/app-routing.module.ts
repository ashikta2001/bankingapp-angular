import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent,
  },
  {
    path:'dashboard', component: DashboardComponent,
  },
  {
    path:'register', component: RegisterComponent,
  },
  {
    path:'transactionhistory', component: TransactionhistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
