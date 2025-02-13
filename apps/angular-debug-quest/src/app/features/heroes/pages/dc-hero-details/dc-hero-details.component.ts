import { Component, computed, inject, input, Input } from '@angular/core';
import { HeroItemComponent } from '../../components/hero-item.component';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dc-hero-details',
  templateUrl: './dc-hero-details.component.html',
  imports: [HeroItemComponent, AsyncPipe],
})
export class DcHeroDetailsComponent {
  private heroService = inject(HeroService);

  dcId = input.required<string>();
  hero$ = computed(() => {
    return this.heroService.getHeroById(this.dcId());
  });
}
