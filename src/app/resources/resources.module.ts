import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResourcesBaseComponent } from './base/resources-base.component';
import { ResourcesDpsComponent } from './resources-dps/resources-dps.component';
import { ResourcesHealingComponent } from './resources-healing/resources-healing.component';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesSuggestionBoxComponent } from './resources-suggestion-box/resources-suggestion-box.component';
import { ResourcesTankingComponent } from './resources-tanking/resources-tanking.component';
import { ResourcesComponent } from './resources.component';

@NgModule({
    declarations: [
        ResourcesComponent,
        ResourcesDpsComponent,
        ResourcesHealingComponent,
        ResourcesTankingComponent,
        ResourcesBaseComponent,
        ResourcesSuggestionBoxComponent,
    ],
    imports: [
        CommonModule,
        ResourcesRoutingModule,
    ],
})
export class ResourcesModule {
}
