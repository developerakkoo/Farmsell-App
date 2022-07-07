import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { LeafyVegPage } from './leafy-veg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [LeafyVegPage],
  entryComponents: [LeafyVegPage]
})
export class LeafyVegPageModule {}
