import { Injectable } from "@angular/core";
import { ActivatedRoute, Params, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { RssSelected, ApplicationState, RssState,
         Podcast, PodcastSelected, currentPodcastSelector } from "../stores";


@Injectable()
export class RssSelectorGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let id = decodeURIComponent(route.params['id']);
        console.log("Routing event for Feed ID:", id);
        this.store.dispatch(new RssSelected(id));
        return true;
    }

    constructor(private store:Store<ApplicationState>){}
}

@Injectable()
export class EpisodeSelectorGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let episodeGuid : string = decodeURIComponent(route.params["episode"]);
        console.log("Routing event from Episode Guid:",episodeGuid);
        this.store.dispatch(new PodcastSelected(episodeGuid));
        return true;
    }

    constructor(private store:Store<ApplicationState>){}
}