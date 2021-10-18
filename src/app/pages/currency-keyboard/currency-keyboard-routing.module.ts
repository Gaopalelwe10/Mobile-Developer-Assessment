import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyKeyboardPage } from './currency-keyboard.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyKeyboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyKeyboardPageRoutingModule {}
