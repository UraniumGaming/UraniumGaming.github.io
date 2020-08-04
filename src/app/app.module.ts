import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/home/home.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterModule,
        LayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
