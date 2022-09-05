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
import { AppAccessdeniedComponent } from "./app.accessdenied.component";
import { AppCalendarComponent } from "./app.calendar.component";
import { AppContactusComponent } from "./app.contactus.component";
import { AppCrudComponent } from "./app.crud.component";
import { AppErrorComponent } from "./app.error.component";
import { AppHelpComponent } from "./app.help.component";
import { AppInvoiceComponent } from "./app.invoice.component";
import { AppLandingComponent } from "./app.landing.component";
import { AppLoginComponent } from "./app.login.component";
import { AppNotfoundComponent } from "./app.notfound.component";
import { AppTimelineDemoComponent } from "./app.timelinedemo.component";
import { AppWizardComponent } from "./app.wizard.component";

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
        AppCrudComponent,
        AppCalendarComponent,
        AppLoginComponent,
        AppLandingComponent,
        AppInvoiceComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppTimelineDemoComponent,
        AppWizardComponent,
        AppContactusComponent,
    ],
    providers: [MenuService, AppBreadcrumbService],
})
export class PagesModule {}