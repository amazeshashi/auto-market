import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchProductComponent } from './search-product/search-product.component';
import { MarketStatusComponent } from './market-status/market-status.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductTypeComponent } from './product-type/product-type.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { LogosComponent } from './logos/logos.component';
import { SellingProductComponent } from './selling-product/selling-product.component';


@NgModule({
  declarations: [HomeComponent, SearchProductComponent, MarketStatusComponent, ProductTypeComponent, FilterSearchComponent, PopularProductComponent, LogosComponent, SellingProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
