import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, RootObject } from '../models/hero.model';
import { Heroes } from '../models/heroes.model';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes> {
    return this.http.get<Heroes>('https://gateway.marvel.com:443/v1/public/characters?apikey=b87e31a5229897615d6821977df81e41');
  }
  getHeroesById(id:string): Observable<RootObject> {
    return this.http.get<RootObject>(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=b87e31a5229897615d6821977df81e41`);
  }
}
