import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BecomingAnOfficerComponent } from './becoming-an-officer/becoming-an-officer.component';
import { GuildInfoRoutingModule } from './guild-info-routing.module';
import { GuildInfoComponent } from './guild-info.component';
import { RulesComponent } from './rules/rules.component';
import { UraniumOfficersComponent } from './uranium-officers/uranium-officers.component';

@NgModule({
    declarations: [
        GuildInfoComponent,
        RulesComponent,
        BecomingAnOfficerComponent,
        UraniumOfficersComponent,
    ],
    imports: [
        CommonModule,
        GuildInfoRoutingModule,
    ],
})
export class GuildInfoModule {
}
