import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowUpUserPageRoutingModule } from './show-up-user-routing.module';

import { ShowUpUserPage } from './show-up-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowUpUserPageRoutingModule
  ],
  declarations: [ShowUpUserPage]
})
export class ShowUpUserPageModule {}
