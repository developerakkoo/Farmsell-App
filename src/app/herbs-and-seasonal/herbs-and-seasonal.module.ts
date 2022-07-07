import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HerbsAndSeasonalPage } from './herbs-and-seasonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [HerbsAndSeasonalPage],
  entryComponents: [HerbsAndSeasonalPage]
})
export class HerbsAndSeasonalPageModule {}
