import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { AudioPlayerService } from "./audio-player.service";
import { Podcast, ApplicationState, 
  PodcastSelected, currentPodcastSelector } from "../stores";
import { Store } from "@ngrx/store";


@Component({
  selector: 'player-container',
  template: '<player [src]="source$ | async" ></player>'
})
export class PlayerContainer implements OnInit {
  source$ : Observable<Podcast>;

  constructor(private router:Router, private route:ActivatedRoute, private playerSvc: AudioPlayerService, private store:Store<ApplicationState>) {

    this.route.params.subscribe((params:Params) => 
      { let episodeGuid : string = params["episode"];
        console.log("Dispatching to store?", episodeGuid);
        store.dispatch(new PodcastSelected(episodeGuid));
      }
    );
    this.source$ = store.select(currentPodcastSelector);
    this.source$.subscribe((podcast) => {
        if(!!podcast){
          playerSvc.load(podcast); //TODO: An effect on the AudioPlayerService
        }else{
          playerSvc.unload();
        }
        
      }
    );
  }

  ngOnInit() {
  }
}