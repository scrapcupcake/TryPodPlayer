import { Component, Input, Output, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { PlayerState } from "./player.state";
import { Observable } from "rxjs/Observable";
import { AudioPlayerService } from "./audio-player.service";
import { MdSlider } from '@angular/material';
import { Podcast } from "../stores";

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class Player implements AfterViewInit {
  @Input() src : Podcast;
  @ViewChild('slider') slider: MdSlider;

  time$ : Observable<number>;


  get currentTime(){
    return this.player.currentTime;
  }
  set currentTime(value){
    this.player.advanceTo(value);
  }

  constructor(private player: AudioPlayerService) {
    this.time$ = player.playerEvents$.map((e) => e.currentTime );
  }

  ngAfterViewInit(): void {
    this.player.playerEvents$.subscribe((e) => {
      this.slider.min = 0;
      this.slider.max = e.mediaDuration;
      //console.log("Slider?", this.slider);
    });
  }


}