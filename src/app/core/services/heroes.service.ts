import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/hero.model';
import { Heroes } from '../models/heroes.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes> {
    return this.http.get<Heroes>(`${environment.urlBase}?apikey=${environment.publicKey}`);
  }
  getHeroesById(id:string): Observable<RootObject> {
    return this.http.get<RootObject>(`${environment.urlBase}/${id}?apikey=${environment.publicKey}`);
  }
}
