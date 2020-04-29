import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UutinenPageRoutingModule } from './uutinen-routing.module';

import { UutinenPage } from './uutinen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UutinenPageRoutingModule
  ],
  declarations: [UutinenPage]
})
export class UutinenPageModule {}
