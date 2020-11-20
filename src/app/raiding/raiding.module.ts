import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralRaidingComponent } from './general/general-raiding.component';
import { HeroicRaidingComponent } from './heroic/heroic-raiding.component';
import { MythicRaidingComponent } from './mythic/mythic-raiding.component';
import { RaidingRoutingModule } from './raiding-routing.module';
import { RaidingComponent } from './raiding.component';
import { RaidingStratsComponent } from './strats/raiding-strats.component';

@NgModule({
    declarations: [
        RaidingComponent,
        RaidingStratsComponent,
        GeneralRaidingComponent,
        MythicRaidingComponent,
        HeroicRaidingComponent,
    ],
    imports: [
        CommonModule,
        RaidingRoutingModule,
        NgbNavModule,
    ],
})
export class RaidingModule {
}
