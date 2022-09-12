import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "../app-primeng.module";
import { AppRoutingModule } from "../app-routing.module";
import { LoaderComponent } from "./loader/loader.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PrimeNgModule,
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ]
})
export class EngineModule {}
