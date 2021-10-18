import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTypesPage } from './product-types.page';

const routes: Routes = [
  {
    path: '',
    component: ProductTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductTypesPageRoutingModule {}
