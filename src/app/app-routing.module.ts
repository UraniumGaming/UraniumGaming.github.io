import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { JoinUraniumComponent } from 'app/join-uranium/join-uranium.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'join-uranium',
        component: JoinUraniumComponent,
    },
    {
        path: 'media',
        loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
    },
    {
        path: 'raiding',
        loadChildren: () => import('./raiding/raiding.module').then(m => m.RaidingModule),
    },
    {
        path: 'guild-info', 
        loadChildren: () => import('./guild-info/guild-info.module').then(m => m.GuildInfoModule) 
    },
    {
        path: 'resources',  
        loadChildren: () =>
            import('./resources/resources.module').then(m => m.ResourcesModule)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
