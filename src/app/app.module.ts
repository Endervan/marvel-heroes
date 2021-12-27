import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {MarvelCharacterComponent} from './marvel/marvel-character/marvel-character.component';
import {MarvelComicsComponent} from './marvel/marvel-comics/marvel-comics.component';
import {MarvelEventsComponent} from './marvel/marvel-events/marvel-events.component';
import {MarvelSeriesComponent} from './marvel/marvel-series/marvel-series.component';
import {MarvelStoriesComponent} from './marvel/marvel-stories/marvel-stories.component';
import {PipeModule} from './pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    MarvelCharacterComponent,
    MarvelComicsComponent,
    MarvelEventsComponent,
    MarvelSeriesComponent,
    MarvelStoriesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
