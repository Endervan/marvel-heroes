import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  API_URL = 'https://gateway.marvel.com/v1/public/';
  KEY = '?ts=16185334990410&apikey=f819f3621f81dde7edc382743d93d41c&hash=968c51ae154e70c54a0d0dd4fb5f405d';

  constructor(
    private http: HttpClient) {
  }

  getAllCharacter(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'characters' + this.KEY + '&limit=50')
      .pipe(map((data: any) => data.data.results));
  }

  getComicsByCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/comics` + this.KEY)
      .pipe(map((data: any) => data.data.results));
  }

  getEventsByCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/events` + this.KEY)
      .pipe(map((data: any) => data.data.results));
  }

  getSeriesByCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/series` + this.KEY)
      .pipe(map((data: any) => data.data.results));
  }

  getStoriesByCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/stories` + this.KEY)
      .pipe(map((data: any) => data.data.results));
  }


}
