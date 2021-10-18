import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductTypesPageRoutingModule } from './product-types-routing.module';

import { ProductTypesPage } from './product-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductTypesPageRoutingModule
  ],
  declarations: [ProductTypesPage]
})
export class ProductTypesPageModule {}
