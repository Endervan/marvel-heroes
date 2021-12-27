import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPage } from './heroes.page';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesPageRoutingModule {}
