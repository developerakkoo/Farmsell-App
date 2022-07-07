import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DryFruitsPage } from './dry-fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [DryFruitsPage],
 entryComponents: [DryFruitsPage]
})
export class DryFruitsPageModule {}
