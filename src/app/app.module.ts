//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

//NGRX Imports
import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';


//Store Imports
import { ApplicationState, RssEffects, rssReducer, uiReducer } from "./stores";

import { SelectorContainer, RssSelector } from './rss-selector';
import { AppComponent } from './app.component';
import { LandingComponent, LandingContainer, LatestPodcast, CurrentlyPlaying } from './landing';
import { Archive, ArchiveContainer } from "./archive";
import { Player, PlayerContainer, AudioPlayerService } from "./player";
import {appRoutes, RssSelectorGuard, EpisodeSelectorGuard} from './routing';



const initialState = {router:{path:window.location.pathname + window.location.search}}

const StoreImport = StoreModule.provideStore(
  compose(
    localStorageSync(['rssStates'], true),combineReducers) //TODO: Add uiState back in here.
    ({ rssStates: rssReducer, uiState: uiReducer, router: routerReducer }),initialState);

@NgModule({
  declarations: [
    AppComponent,
    SelectorContainer,
    RssSelector,
    LandingComponent, 
    LandingContainer,
    LatestPodcast, 
    CurrentlyPlaying,
    Archive,
    ArchiveContainer,
    Player,
    PlayerContainer
  ],
  imports: [
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreImport,
    RouterStoreModule.connectRouter(),
    EffectsModule.run(RssEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension({})
  ],
  providers: [
    RssSelectorGuard,
    EpisodeSelectorGuard,
    AudioPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }