import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const crisisCenterRoutes: Routes = [{
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [{
        path: ':id',
        component: CrisisDetailComponent
    }, {
        path: '',
        component: CrisisListComponent,
        // children: [

        //   {
        //     path: '',
        //     component: CrisisCenterHomeComponent
        //   }
        // ]
    }]
}];


@NgModule({
    imports: [
        RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrisesCenterRoutingModule { }
