import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule]
})

export class AppModule {}
