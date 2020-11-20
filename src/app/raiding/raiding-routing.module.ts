import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRaidingComponent } from './general/general-raiding.component';
import { HeroicRaidingComponent } from './heroic/heroic-raiding.component';
import { MythicRaidingComponent } from './mythic/mythic-raiding.component';
import { RaidingComponent } from './raiding.component';
import { RaidingStratsComponent } from './strats/raiding-strats.component';

const routes: Routes = [
    {
        path: '',
        component: RaidingComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: GeneralRaidingComponent,
            },
            {
                path: 'mythic',
                component: MythicRaidingComponent,
            },
            {
                path: 'heroic',
                component: HeroicRaidingComponent,
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
