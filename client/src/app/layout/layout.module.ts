import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "../app-primeng.module";
import { AppRoutingModule } from "../app-routing.module";
import { SysBreadcrumbComponent } from "./sys-breadcrumb/sys.breadcrumb.component";
import { SysBreadcrumbService } from "./sys-breadcrumb/sys.breadcrumb.service";
import { SysConfigComponent } from "./sys-config/sys.config.component";
import { SysFooterComponent } from "./sys-footer/sys.footer.component";
import { SysInlineMenuComponent } from "./sys-inline-menu/sys.inlinemenu.component";
import { SysMainComponent } from "./sys-main/sys.main.component";
import { SysMenuComponent } from "./sys-menu/sys.menu.component";
import { SysMenuService } from "./sys-menu/sys.menu.service";
import { SysMenuitemComponent } from "./sys-menu/sys.menuitem.component";
import { SysRightMenuComponent } from "./sys-right-menu/sys.rightmenu.component";
import { SysTopBarComponent } from "./sys-topbar/sys.topbar.component";


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
        SysMenuComponent,
        SysBreadcrumbComponent,
        SysMainComponent,
        SysConfigComponent,
        SysMenuitemComponent,
        SysInlineMenuComponent,
        SysRightMenuComponent,
        SysTopBarComponent,
        SysFooterComponent,  
    ],
    providers: [SysMenuService, SysBreadcrumbService],
})
export class LayoutModule {}
