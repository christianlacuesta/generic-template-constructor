import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "src/app/app-primeng.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppBreadcrumbService } from "src/app/layout/breadcrumb/app.breadcrumb.service";
import { MenuService } from "src/app/layout/menu/app.menu.service";
import { AppCodeModule } from "../../blocks/app-code/app.code.component";
import { CountryService } from "../service/countryservice";
import { CustomerService } from "../service/customerservice";
import { EventService } from "../service/eventservice";
import { IconService } from "../service/iconservice";
import { NodeService } from "../service/nodeservice";
import { PhotoService } from "../service/photoservice";
import { ProductService } from "../service/productservice";
import { ButtonDemoComponent } from "./buttondemo.component";
import { ChartsDemoComponent } from "./chartsdemo.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardAnalyticsComponent } from "./dashboardanalytics.component";
import { DocumentationComponent } from "./documentation.component";
import { EmptyDemoComponent } from "./emptydemo.component";
import { FileDemoComponent } from "./filedemo.component";
import { FloatLabelDemoComponent } from "./floatlabeldemo.component";
import { FormLayoutDemoComponent } from "./formlayoutdemo.component";
import { InputDemoComponent } from "./inputdemo.component";
import { InvalidStateDemoComponent } from "./invalidstatedemo.component";
import { ListDemoComponent } from "./listdemo.component";
import { MediaDemoComponent } from "./mediademo.component";
import { MenusComponent } from "./menus/menus.component";
import { MessagesDemoComponent } from "./messagesdemo.component";
import { MiscDemoComponent } from "./miscdemo.component";
import { OverlaysDemoComponent } from "./overlaysdemo.component";
import { PanelsDemoComponent } from "./panelsdemo.component";
import { TableDemoComponent } from "./tabledemo.component";
import { TreeDemoComponent } from "./treedemo.component";

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
        DashboardComponent,
        DashboardAnalyticsComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
    ],
    providers: [MenuService, AppBreadcrumbService,
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService],
})
export class ViewModule {}