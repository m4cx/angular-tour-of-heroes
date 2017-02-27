import { Observable } from 'rxjs/Observable';
import { CrisisService } from './../crisis.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Crisis } from './../crisis';

@Component({
  selector: 'crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  title = 'Tour of Heroes';
  crises: Observable<Crisis[]>;
  private selectedId: number;
  selectedCrisis: Crisis;

  constructor(
    private router: Router,
    private service: CrisisService,
    private route: ActivatedRoute
  ) { }

  getHeroes(): void {
  }

  ngOnInit(): void {

    this.crises = this.route.params.switchMap((params: Params) => {
      this.selectedId = +params['id'];
      return this.service.getCrises();
    });
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  onSelect(crisis: Crisis): void {
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}
