import { CrisisService } from './crisis.service';
import { CrisesCenterRoutingModule } from './crisis-center-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisesCenterRoutingModule
  ],
  declarations: [CrisisListComponent, CrisisDetailComponent],
  providers: [CrisisService]
})
export class CrisisCenterModule { }
