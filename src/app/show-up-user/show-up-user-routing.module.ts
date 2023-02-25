import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowUpUserPage } from './show-up-user.page';

const routes: Routes = [
  {
    path: '',
    component: ShowUpUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowUpUserPageRoutingModule {}
