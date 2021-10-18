import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CellphoneKeyboardPageRoutingModule } from './cellphone-keyboard-routing.module';

import { CellphoneKeyboardPage } from './cellphone-keyboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CellphoneKeyboardPageRoutingModule
  ],
  declarations: [CellphoneKeyboardPage]
})
export class CellphoneKeyboardPageModule {}
