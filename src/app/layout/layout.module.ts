import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TopBarComponent } from 'src/app/layout/top-bar/top-bar.component';

@NgModule({
    declarations: [
        TopBarComponent,
    ],
    imports: [
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        TopBarComponent,
    ],
})
export class LayoutModule {
}
