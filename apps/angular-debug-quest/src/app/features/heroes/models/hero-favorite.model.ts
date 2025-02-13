import { Hero } from './hero.model';

export class HeroWithFavorite {
  id: number;
  name: string;
  isFavorite: boolean;
  publisher: string;
  alterEgo: string;
  firstAppearance: string;
  powers: string[];

  constructor(hero: Hero) {
    this.id = hero.id;
    this.name = hero.name;
    this.isFavorite = false;
    this.publisher = hero.publisher;
    this.alterEgo = hero.alterEgo;
    this.firstAppearance = hero.firstAppearance;
    this.powers = hero.powers;
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
