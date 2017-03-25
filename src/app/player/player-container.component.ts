import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { AudioPlayerService } from "./audio-player.service";
import { Podcast, ApplicationState, 
  LoadPodcastAudio, PodcastSelected, currentRssFeedSelector } from "../stores";
import { Store } from "@ngrx/store";


@Component({
  selector: 'player-container',
  template: '<player [src]="source$ | async" ></player>'
})
export class PlayerContainer implements OnInit {
  source$ : Observable<Podcast>;

  constructor(private router:Router, private route:ActivatedRoute, private playerSvc: AudioPlayerService, private store:Store<ApplicationState>) {

    this.route.params.subscribe((params:Params) => store.dispatch(new LoadPodcastAudio(params["episode"])));
    this.source$ = store.select(currentRssFeedSelector);
    this.source$.subscribe((podcast) => {
        playerSvc.load(podcast);
        store.dispatch(new PodcastSelected(podcast));
      }
    );
  }

  ngOnInit() {
  }
}