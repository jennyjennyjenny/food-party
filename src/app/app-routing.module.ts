import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartySearchComponent } from './party-search/party-search.component';
import { PotluckComponent } from './potluck/potluck.component';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { CreatePartyComponent } from './create-party/create-party.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/partysearch', pathMatch: 'full' },
  { path: 'partysearch', component: PartySearchComponent },
  { path: 'parties', component: PotluckComponent },
  { path: 'detail/:id', component: PartyDetailComponent },
  { path: 'create', component: CreatePartyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
