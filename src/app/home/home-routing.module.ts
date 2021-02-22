import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HomeComponent } from './home.component';
import { MarketStatusComponent } from './market-status/market-status.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { SellingProductComponent } from './selling-product/selling-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'selling-product', component: SellingProductComponent},
  {path: 'popular-product', component: PopularProductComponent},
  {path: 'market-status', component: MarketStatusComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
