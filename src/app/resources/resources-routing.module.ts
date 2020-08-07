import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesBaseComponent } from './base/resources-base.component';
import { ResourcesDpsComponent } from './resources-dps/resources-dps.component';
import { ResourcesHealingComponent } from './resources-healing/resources-healing.component';
import { ResourcesSuggestionBoxComponent } from './resources-suggestion-box/resources-suggestion-box.component';
import { ResourcesTankingComponent } from './resources-tanking/resources-tanking.component';
import { ResourcesComponent } from './resources.component';

const routes: Routes = [
    {
        path: '',
        component: ResourcesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ResourcesBaseComponent,
            },
            {
                path: 'dps',
                component: ResourcesDpsComponent,
            },
            {
                path: 'healing',
                component: ResourcesHealingComponent,
            },
            {
                path: 'tanking',
                component: ResourcesTankingComponent,
            },
            {
                path: 'suggestion-box',
                component: ResourcesSuggestionBoxComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ResourcesRoutingModule {
}
