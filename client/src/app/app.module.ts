import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppTopBarComponent} from './main/topbar/app.topbar.component';
import {AppRightMenuComponent} from './main/rightmenu/app.rightmenu.component';
import {AppBreadcrumbComponent} from './main/breadcrumb/app.breadcrumb.component';
import {AppInlineMenuComponent} from './main/inlinemenu/app.inlinemenu.component';
import {AppFooterComponent} from './main/footer/app.footer.component';
import {AppMenuComponent} from './main/menu/app.menu.component';
import {AppMenuitemComponent} from './main/menu/app.menuitem.component';

import {AppCodeModule} from './app.code.component';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';

import {AppHelpComponent} from './pages/app.help.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';

import {MenuService} from './main/menu/app.menu.service';
import {AppBreadcrumbService} from './../app/main/breadcrumb/app.breadcrumb.service';
import {AppContactusComponent} from './pages/app.contactus.component';
import { PrimengModule } from './app-primeng.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromApp from './store/app.reducer';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { TableComponent } from './engine/table/table.component';
import { TableDashboardComponent } from './engine/table/table-dashboard/table-dashboard.component';
import { TableFiltersComponent } from './engine/table/table-filters/table-filters.component';
import { TableActionsComponent } from './engine/table/table-actions/table-actions.component';
import { TableFooterComponent } from './engine/table/table-footer/table-footer.component';
import { TableHeaderComponent } from './engine/table/table-header/table-header.component';
import { FormComponent } from './engine/form/form/form.component';
import { TextboxComponent } from './engine/form/form/items/textbox/textbox.component';
import { DropdownComponent } from './engine/form/form/items/dropdown/dropdown.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PrimengModule,
        AppCodeModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([
            // UserInfoEffects,
            // UserSessionsEffects,
            // UserSessionLogsEffects
        ]),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        })
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppInlineMenuComponent,
        AppRightMenuComponent,
        AppBreadcrumbComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppLoginComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppContactusComponent,
        AuthComponent,
        AdminComponent,
        TableComponent,
        TableDashboardComponent,
        TableFiltersComponent,
        TableActionsComponent,
        TableFooterComponent,
        TableHeaderComponent,
        FormComponent,
        TextboxComponent,
        DropdownComponent
    ],
    providers: [
        DatePipe,
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        },
         MenuService, AppBreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
