import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'app/app.component';
import { TopBarComponent } from 'app/layout/top-bar/top-bar.component';

@NgModule({
    declarations: [
        TopBarComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbDropdownModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        TopBarComponent,
    ],
})
export class LayoutModule {
}
