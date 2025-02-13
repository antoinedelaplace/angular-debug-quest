import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HeroWithFavorite } from '../models/hero-favorite.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getMarvelHeroesWithFavorite(): Observable<HeroWithFavorite[]> {
    return this.getHeroes().pipe(
      map(heroes =>
        heroes
          .filter(hero => hero.publisher === 'Marvel Comics')
          .map(hero => new HeroWithFavorite(hero))
      )
    );
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`);
  }
}
