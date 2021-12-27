import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private API_KEY = '&apikey=5a237863b3cc2061003cbbc4fe20dc06';
  TS = '?ts=1';
  private PRIVATE_KEY = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
  private HASH = '&hash=bd4b447a65ef5d6b174f87cf9db6d2db';
  private API_URL = 'https://gateway.marvel.com/v1/public/';
  private KEY = `${this.TS}${this.API_KEY}${this.HASH}`;

  constructor(
    private http: HttpClient) {
    console.log(this.API_URL + 'characters' + this.KEY);
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
