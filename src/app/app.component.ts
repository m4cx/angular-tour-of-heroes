import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

