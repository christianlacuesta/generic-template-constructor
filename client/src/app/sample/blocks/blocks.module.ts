import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "src/app/app-primeng.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppBreadcrumbService } from "src/app/sample/layout/breadcrumb/app.breadcrumb.service";
import { MenuService } from "src/app/sample/layout/menu/app.menu.service";
import { AppCodeModule } from "./app-code/app.code.component";
import { BlocksComponent } from "./blocks/blocks.component";
import { BlockViewer } from "./blockviewer/blockviewer.component";

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
        BlocksComponent,
        BlockViewer
    ],
    providers: [MenuService, AppBreadcrumbService],
})
export class BlocksModule {}