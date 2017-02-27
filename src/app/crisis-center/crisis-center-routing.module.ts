import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const crisesRoutes: Routes = [
    { path: 'crises', component: CrisisListComponent },
    { path: 'crisis/:id', component: CrisisDetailComponent }    
];

@NgModule({
    imports: [
        RouterModule.forChild(crisesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrisesCenterRoutingModule { }
