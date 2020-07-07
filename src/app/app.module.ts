import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { HeaderComponent } from './header/header.component';
import { PromotionalBannerComponent } from './promotional-banner/promotional-banner.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { GroupListSliderComponent } from './group-list-slider/group-list-slider.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    HeaderComponent,
    PromotionalBannerComponent,
    FeaturedProductsComponent,
    GroupListSliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
