import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PrimeNgModule } from './app-primeng.module';
import { BlocksModule } from './sample/blocks/blocks.module';
import { ViewModule } from './sample/demo/view/view.module';
import { PagesModule } from './sample/pages/pages.module';
import { IconsModule } from './sample/utilities/icons.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PrimeNgModule,
        LayoutModule,
        BlocksModule,
        ViewModule,
        PagesModule,
        IconsModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
