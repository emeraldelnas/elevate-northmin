import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinistryBazaarComponent } from './pages/ministry-bazaar/ministry-bazaar.component';
import { ImgLazyLoadDirective } from './directives/img-lazy-load.directive';
import { VidLazyLoadDirective } from './directives/vid-lazy-load.directive';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MinistryBazaarComponent,
    ImgLazyLoadDirective,
    VidLazyLoadDirective,
    FooterComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
