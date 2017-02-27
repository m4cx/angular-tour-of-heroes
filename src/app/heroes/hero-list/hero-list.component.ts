import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Observable<Hero[]>;
  private selectedId: number;
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  getHeroes(): void {
  }

  ngOnInit(): void {

    this.heroes = this.route.params.switchMap((params: Params) => {
      this.selectedId = +params['id'];
      return this.heroService.getHeroes();
    });
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero): void {
    this.router.navigate(['/hero', hero.id]);
  }
}
