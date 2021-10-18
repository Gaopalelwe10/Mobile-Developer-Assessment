import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPageModule } from './pages/confirmation/confirmation.module';
import { CellphoneKeyboardPageModule } from './pages/cellphone-keyboard/cellphone-keyboard.module';
import { CurrencyKeyboardPageModule } from './pages/currency-keyboard/currency-keyboard.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'ios' }),
    // IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ConfirmationPageModule,
    CellphoneKeyboardPageModule,
    CurrencyKeyboardPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
