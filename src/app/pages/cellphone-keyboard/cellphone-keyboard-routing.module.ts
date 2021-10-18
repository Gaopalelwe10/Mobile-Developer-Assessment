import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellphoneKeyboardPage } from './cellphone-keyboard.page';

const routes: Routes = [
  {
    path: '',
    component: CellphoneKeyboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CellphoneKeyboardPageRoutingModule {}
