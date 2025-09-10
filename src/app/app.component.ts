import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./sections/header/header.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { MainpageComponent } from "./pages/mainpage/mainpage.component";
import { CardProductsComponent } from "./components/cards/card-products/card-products.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainpageComponent, CardProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'S6-Budget';
}
