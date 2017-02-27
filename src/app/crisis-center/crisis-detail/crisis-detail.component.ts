import { slideInDownAnimation } from './../../animations';
import { CrisisService } from './../crisis.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Crisis } from './../crisis';
import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    console.log("detail")
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe((crisis: Crisis) => {
        console.log(crisis);
        this.crisis = crisis
      });
  }

  gotoCrises() {
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: this.crisis.id, foo: 'foo' }], { relativeTo: this.route });
  }
}
