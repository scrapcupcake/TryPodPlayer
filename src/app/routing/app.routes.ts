import { Routes } from "@angular/router";
import { SelectorContainer } from "../rss-selector";
import { LandingContainer } from "../landing";
import { ArchiveContainer } from "../archive";
import { PlayerContainer } from "../player";
import {RssSelectorGuard, EpisodeSelectorGuard} from './route-listener.service';

export const appRoutes: Routes = [
  {path: "", component: SelectorContainer},
  {path: "podcast/:id", component: LandingContainer, canActivate:[RssSelectorGuard]},
  {path: "podcast/:id/archive", component: ArchiveContainer, canActivate:[RssSelectorGuard]},
  {path: "podcast/:id/play/:episode", component: PlayerContainer, canActivate:[RssSelectorGuard, EpisodeSelectorGuard]}
];