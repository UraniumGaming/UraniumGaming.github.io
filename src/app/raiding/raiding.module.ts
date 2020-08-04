import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RaidingBaseComponent } from 'src/app/raiding/base/raiding-base.component';
import { RaidingRoutingModule } from './raiding-routing.module';
import { RaidingComponent } from './raiding.component';
import { RaidingStratsComponent } from 'src/app/raiding/strats/raiding-strats.component';

@NgModule({
    declarations: [
        RaidingComponent,
        RaidingStratsComponent,
        RaidingBaseComponent,
    ],
    imports: [
        CommonModule,
        RaidingRoutingModule,
    ],
})
export class RaidingModule {
}
