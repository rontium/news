import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UutinenPage } from './uutinen.page';

const routes: Routes = [
  {
    path: '',
    component: UutinenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UutinenPageRoutingModule {}
