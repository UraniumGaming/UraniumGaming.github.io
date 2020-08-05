import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaidingBaseComponent } from 'app/raiding/base/raiding-base.component';
import { RaidingStratsComponent } from 'app/raiding/strats/raiding-strats.component';

import { RaidingComponent } from './raiding.component';

const routes: Routes = [
    {
        path: '',
        component: RaidingComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: RaidingBaseComponent,
            },
            {
                path: 'strats',
                component: RaidingStratsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RaidingRoutingModule {
}
