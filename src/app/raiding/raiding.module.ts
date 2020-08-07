import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RaidingBaseComponent } from 'app/raiding/base/raiding-base.component';
import { RaidingRoutingModule } from './raiding-routing.module';
import { RaidingComponent } from './raiding.component';
import { RaidingStratsComponent } from 'app/raiding/strats/raiding-strats.component';

@NgModule({
    declarations: [
        RaidingComponent,
        RaidingStratsComponent,
        RaidingBaseComponent,
    ],
    imports: [
        CommonModule,
        RaidingRoutingModule,
        NgbNavModule,
    ],
})
export class RaidingModule {
}
