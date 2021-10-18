import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyKeyboardPageRoutingModule } from './currency-keyboard-routing.module';

import { CurrencyKeyboardPage } from './currency-keyboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyKeyboardPageRoutingModule
  ],
  declarations: [CurrencyKeyboardPage]
})
export class CurrencyKeyboardPageModule {}
