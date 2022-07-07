import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'enter-otp/:number',
    loadChildren: () => import('./enter-otp/enter-otp.module').then( m => m.EnterOtpPageModule)
  },
  {
    path: 'order-received',
    loadChildren: () => import('./order-received/order-received.module').then( m => m.OrderReceivedPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },

  {
    path: 'location/:orderId',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'order-detail/:order-id/:id',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'promo-code',
    loadChildren: () => import('./promo-code/promo-code.module').then( m => m.PromoCodePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./account/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'address-modal',
    loadChildren: () => import('./address-modal/address-modal.module').then( m => m.AddressModalPageModule)
  }
 
 

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
