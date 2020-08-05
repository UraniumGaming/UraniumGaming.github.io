import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomingAnOfficerComponent } from 'app/guild-info/becoming-an-officer/becoming-an-officer.component';
import { RulesComponent } from 'app/guild-info/rules/rules.component';
import { UraniumOfficersComponent } from 'app/guild-info/uranium-officers/uranium-officers.component';
import { GuildInfoComponent } from './guild-info.component';

const routes: Routes = [
    {
        path: '',
        component: GuildInfoComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'rules',
            },
            {
                path: 'rules',
                component: RulesComponent,
            },
            {
                path: 'becoming-an-officer',
                component: BecomingAnOfficerComponent,
            },
            {
                path: 'uranium-officers',
                component: UraniumOfficersComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GuildInfoRoutingModule {
}
