import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinistryBazaarComponent } from './pages/ministry-bazaar/ministry-bazaar.component';
import { ImgLazyLoadDirective } from './directives/img-lazy-load.directive';
import { VidLazyLoadDirective } from './directives/vid-lazy-load.directive';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { ExaltComponent } from './pages/ministries/exalt/exalt.component';
import { MultimediaComponent } from './pages/ministries/multimedia/multimedia.component';
import { IronSaintsComponent } from './pages/ministries/iron-saints/iron-saints.component';
import { HostsComponent } from './pages/ministries/hosts/hosts.component';
import { LiveProdComponent } from './pages/ministries/live-prod/live-prod.component';
import { UsheringComponent } from './pages/ministries/ushering/ushering.component';
import { GospelSharingComponent } from './pages/ministries/gospel-sharing/gospel-sharing.component';
import { WatchmenComponent } from './pages/ministries/watchmen/watchmen.component';
import { TwelveBasketsComponent } from './pages/ministries/twelve-baskets/twelve-baskets.component';
import { MarketingComponent } from './pages/ministries/marketing/marketing.component';
import { RndComponent } from './pages/ministries/rnd/rnd.component';
import { CraftsComponent } from './pages/ministries/crafts/crafts.component';
import { JoinNowBannerComponent } from './shared/join-now-banner/join-now-banner.component';
import { PrayerPartnerComponent } from './pages/ministries/prayer-partner/prayer-partner.component';

@NgModule({
  declarations: [
    AppComponent,
    MinistryBazaarComponent,
    ImgLazyLoadDirective,
    VidLazyLoadDirective,
    FooterComponent,
    SocialLinksComponent,
    ExaltComponent,
    MultimediaComponent,
    IronSaintsComponent,
    HostsComponent,
    LiveProdComponent,
    UsheringComponent,
    GospelSharingComponent,
    WatchmenComponent,
    TwelveBasketsComponent,
    MarketingComponent,
    RndComponent,
    CraftsComponent,
    JoinNowBannerComponent,
    PrayerPartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
