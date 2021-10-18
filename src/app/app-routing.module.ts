import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'product-types',
    loadChildren: () => import('./pages/product-types/product-types.module').then( m => m.ProductTypesPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'cellphone-keyboard',
    loadChildren: () => import('./pages/cellphone-keyboard/cellphone-keyboard.module').then( m => m.CellphoneKeyboardPageModule)
  },
  {
    path: 'currency-keyboard',
    loadChildren: () => import('./pages/currency-keyboard/currency-keyboard.module').then( m => m.CurrencyKeyboardPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
