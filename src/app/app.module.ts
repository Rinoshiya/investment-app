import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputComponent } from "./user-input/user-input.component";
import { FormsModule } from "@angular/forms";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@NgModule({
    declarations:[AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
    bootstrap:[AppComponent],
    imports: [BrowserModule, FormsModule],
    exports: []
})
export class AppModule {

}