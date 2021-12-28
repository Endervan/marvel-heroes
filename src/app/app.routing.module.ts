import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarvelCharacterComponent} from './marvel/marvel-character/marvel-character.component';
import {MarvelComicsComponent} from './marvel/marvel-comics/marvel-comics.component';
import {MarvelEventsComponent} from './marvel/marvel-events/marvel-events.component';
import {MarvelSeriesComponent} from './marvel/marvel-series/marvel-series.component';
import {MarvelStoriesComponent} from './marvel/marvel-stories/marvel-stories.component';

const routes: Routes = [
  {
    path: '',
    component: MarvelCharacterComponent
  },
  {
    path: 'comics/:id',
    component: MarvelComicsComponent
  },
  {
    path: 'events/:id',
    component: MarvelEventsComponent
  },
  {
    path: 'series/:id',
    component: MarvelSeriesComponent
  },
  {
    path: 'stories/:id',
    component: MarvelStoriesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
