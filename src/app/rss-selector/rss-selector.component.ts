import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RssState, Podcast } from "../stores";

@Component({
  selector: 'rss-selector',
  templateUrl: './rss-selector.component.html',
  styleUrls: ['./rss-selector.component.less']
})
export class RssSelector implements OnInit {
  @Input() feeds: RssState[];
  @Output() add : EventEmitter<string> = new EventEmitter<string>();
  expandSearch : boolean;

  addFeed(url){
    this.add.emit(url);
  }

  grow(){
    console.log("GROW!");
    this.expandSearch = true;
  }

  shring(){
    console.log("shrink");
    this.expandSearch = false;
  }

  navigateToFeed(feed:RssState){
    this.router.navigate(["podcast",encodeURIComponent(feed.link)]);
  }
  
  constructor(private router: Router){
  }

  ngOnInit() {
  }

}
