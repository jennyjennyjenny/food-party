import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotluckComponent } from './potluck/potluck.component';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { PartySearchComponent } from './party-search/party-search.component';
import { MenuPipe } from './menu.pipe';
import { PartyMenuComponent } from './party-menu/party-menu.component';
import { CreatePartyComponent } from './create-party/create-party.component';


@NgModule({
  declarations: [
    AppComponent,
    PotluckComponent,
    PartyDetailComponent,
    PartySearchComponent,
    MenuPipe,
    PartyMenuComponent,
    CreatePartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
