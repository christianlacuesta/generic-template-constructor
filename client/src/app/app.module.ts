import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { SampleLayoutModule } from './sample/layout/sample-layout.module';
import { PrimeNgModule } from './app-primeng.module';
import { BlocksModule } from './sample/blocks/blocks.module';
import { ViewModule } from './sample/demo/view/view.module';
import { PagesModule } from './sample/pages/pages.module';
import { IconsModule } from './sample/utilities/icons.module';
import { AuthModule } from './auth/auth.module';
import { EngineModule } from './engine/engine.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PrimeNgModule,
        SampleLayoutModule,
        BlocksModule,
        ViewModule,
        PagesModule,
        IconsModule,
        AuthModule,
        EngineModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
