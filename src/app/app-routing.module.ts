import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinistryBazaarComponent } from './pages/ministry-bazaar/ministry-bazaar.component';


const routes: Routes = [
  { path: '', component: MinistryBazaarComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
