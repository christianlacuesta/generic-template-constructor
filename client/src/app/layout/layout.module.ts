import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "../app-primeng.module";
import { AppRoutingModule } from "../app-routing.module";
import { AppRightMenuComponent } from "./right-menu/app.rightmenu.component";
import { AppBreadcrumbComponent } from "./breadcrumb/app.breadcrumb.component";
import { AppBreadcrumbService } from "./breadcrumb/app.breadcrumb.service";
import { AppConfigComponent } from "./config/app.config.component";
import { AppFooterComponent } from "./footer/app.footer.component";
import { AppInlineMenuComponent } from "./inline-menu/app.inlinemenu.component";
import { AppMainComponent } from "./main/app.main.component";
import { AppMenuComponent } from "./menu/app.menu.component";
import { MenuService } from "./menu/app.menu.service";
import { AppMenuitemComponent } from "./menu/app.menuitem.component";
import { AppTopBarComponent } from "./topbar/app.topbar.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PrimeNgModule,
    ],
    declarations: [
        AppMenuComponent,
        AppBreadcrumbComponent,
        AppMainComponent,
        AppConfigComponent,
        AppMenuitemComponent,
        AppInlineMenuComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,        
    ],
    providers: [MenuService, AppBreadcrumbService],
})
export class LayoutModule {}
