import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimeNgModule } from "../app-primeng.module";
import { AppRoutingModule } from "../app-routing.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PrimeNgModule,
    ],
    declarations: [
        AuthComponent
    ]
})
export class AuthModule {}
