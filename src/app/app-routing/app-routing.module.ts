import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './../hero-list/hero-list.component';
import { CrisisListComponent } from './../crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
