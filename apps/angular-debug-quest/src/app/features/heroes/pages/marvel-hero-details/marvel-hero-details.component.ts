import { Component, computed, inject, input } from '@angular/core';
import { HeroItemComponent } from '../../components/hero-item.component';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-marvel-hero-details',
  templateUrl: './marvel-hero-details.component.html',
  imports: [HeroItemComponent, AsyncPipe],
})
export class MarvelHeroDetailsComponent {
  heroService = inject(HeroService);

  marvelId = input.required<string>();
  hero$ = computed(() => {
    return this.heroService.getHeroById(this.marvelId());
  });
}
