import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerState, AudioPlayerService } from "../player";
import { RssState, Podcast } from "../stores";


@Component({
  selector: 'archive',
  templateUrl: 'archive.component.html',
  styleUrls: ['archive.component.less']
})
export class Archive implements OnInit {
  @Input() feed : RssState;
  listen : Podcast;
  latest : Podcast;
  currentArchiveIndex : number; //Todo: Make this part of the NGRX store. Later.

  constructor(private router:Router, private player:AudioPlayerService) {
  }

  urlFor(feedItem:Podcast){
    return `../play/${feedItem.guid}`;    
  }

  ngOnInit() {
    console.log("Archive:feed", this.feed);
    this.listen = this.player.currentItem;
    this.latest = this.feed.podcasts[0];
    this.currentArchiveIndex = 3; //Todo: Start somewhere sensible?
  }

  get havePrevious() : boolean {
      return this.currentArchiveIndex > 0;
  }

  get haveNext() : boolean {
      return this.currentArchiveIndex < this.feed.podcasts.length - 4;
  }

  movePrevious(){
      if(this.havePrevious){
            this.currentArchiveIndex -=3;
      }
  }

  moveNext(){
    if(this.haveNext){
        this.currentArchiveIndex += 3;
    }
  }

  get previous() : Podcast[]{
    return this.feed.podcasts.filter((item,index) => {
        return index >= this.currentArchiveIndex - 3 && index < this.currentArchiveIndex;
    });
  }

  get current() : Podcast[]{
    return this.feed.podcasts.filter((item,index) => {
        return index >= this.currentArchiveIndex && index < this.currentArchiveIndex + 3;
    });
  }

  get next() : Podcast[]{
    return this.feed.podcasts.filter((item,index) => {
        return index >= this.currentArchiveIndex + 3 && index < this.currentArchiveIndex + 6;
    });      
  }
}