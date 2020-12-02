import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { P404Component } from './p404/p404.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes =
[
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountComponent,
    pathMatch: 'full'
  },
  {
    path: 'budget',
    component: BudgetComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: P404Component,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
