import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinistryBazaarComponent } from './ministry-bazaar/ministry-bazaar.component';
import { ImgLazyLoadDirective } from './directives/img-lazy-load.directive';
import { VidLazyLoadDirective } from './directives/vid-lazy-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    MinistryBazaarComponent,
    ImgLazyLoadDirective,
    VidLazyLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
