import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterOtpPageRoutingModule } from './enter-otp-routing.module';

import { EnterOtpPage } from './enter-otp.page';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterOtpPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [EnterOtpPage]
})
export class EnterOtpPageModule {}
