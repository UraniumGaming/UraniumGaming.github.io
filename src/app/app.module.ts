import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';
import { HomeComponent } from 'app/home/home.component';
import { JoinUraniumComponent } from 'app/join-uranium/join-uranium.component';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        JoinUraniumComponent,
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
