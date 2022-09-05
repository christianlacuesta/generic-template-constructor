import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "src/app/app-primeng.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppBreadcrumbService } from "src/app/sample/layout/breadcrumb/app.breadcrumb.service";
import { MenuService } from "src/app/sample/layout/menu/app.menu.service";
import { AppCodeModule } from "../blocks/app-code/app.code.component";
import { IconsComponent } from "./icons.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppCodeModule,
        PrimeNgModule,
    ],
    declarations: [
        IconsComponent
    ],
    providers: [MenuService, AppBreadcrumbService],
})
export class IconsModule {}