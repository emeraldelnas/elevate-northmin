import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MinistryBazaarComponent } from './pages/ministry-bazaar/ministry-bazaar.component';

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

const routes: Routes = [
  { path: '', component: MinistryBazaarComponent },
  { path: 'ministries/exalt', component: ExaltComponent },
  { path: 'ministries/multimedia', component: MultimediaComponent },
  { path: 'ministries/iron-saints', component: IronSaintsComponent },
  { path: 'ministries/hosts', component: HostsComponent },
  { path: 'ministries/live-prod', component: LiveProdComponent },
  { path: 'ministries/ushering', component: UsheringComponent },
  { path: 'ministries/gospel-sharing', component: GospelSharingComponent },
  { path: 'ministries/watchmen', component: WatchmenComponent },
  { path: 'ministries/twelve-baskets', component: TwelveBasketsComponent },
  { path: 'ministries/marketing', component: MarketingComponent },
  { path: 'ministries/rnd', component: RndComponent },
  { path: 'ministries/crafts', component: CraftsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
