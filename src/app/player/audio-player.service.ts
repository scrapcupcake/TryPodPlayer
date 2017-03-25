import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/Rx';
import { PlayerState } from './player.state';
import { Podcast } from "../stores";

@Injectable()
export class AudioPlayerService{
    _audioPlayer : HTMLAudioElement;
    _playerEvents = new ReplaySubject<PlayerState>(1);
    playerEvents$ = this._playerEvents.asObservable();
    public currentItem : Podcast;
    //loaded : boolean;
    //_playing : boolean;
    
    /*public get playing(){
        return this._playing;
    }*/

    constructor(){
        this._audioPlayer = new Audio();
        this._audioPlayer.addEventListener('timeupdate', () =>{ 
                this._playerEvents.next(this.updateFor(this._audioPlayer.currentTime));
            });
    }

    get canPlay(){
        return this._audioPlayer.readyState > 3 &&
         (this._audioPlayer.paused || this._audioPlayer.ended || this._audioPlayer.played.length === 0);
    }

    get playing(){
        return !this._audioPlayer.paused && !this._audioPlayer.ended && 0 < this._audioPlayer.currentTime;
    }

    private updateFor(time){
        return {
            url: this._audioPlayer.currentSrc, 
            mediaDuration: this.duration, 
            currentItem: this.currentItem, 
            currentTime: time};
    }

    load(source:Podcast){
        if(source.guid != this.guid){
            this.pause();
            this.currentItem = source;
            this._audioPlayer.src = source.media.url;
            this._audioPlayer.load();
            this._audioPlayer.addEventListener("canplay", this.playOnLoad.bind(this));
        }
    }


    play(){
        if(!this.playing){
            if(this.canPlay){
                    this._audioPlayer.play();
            }else{
                this._audioPlayer.addEventListener("canplay", this.playOnLoad.bind(this));
            }
        }
    }

    private playOnLoad(){
        this._audioPlayer.addEventListener("canplay", (e) => {
            
            this._playerEvents.next({
                url: this._audioPlayer.currentSrc,
                currentItem: this.currentItem, 
                currentTime: 0, 
                mediaDuration: this.duration});

            this._audioPlayer.play();
            this._audioPlayer.removeEventListener("canplay");
        });
    }

    pause(){
        this._audioPlayer.pause();
    }

    advanceBy(seconds){
            this.resumePlay(() => 
            this._audioPlayer.currentTime = seconds + this._audioPlayer.currentTime);
    }

    advanceTo(seconds){
        this.resumePlay(() => this._audioPlayer.currentTime = seconds);
    }

    resumePlay(behavior){
        let wasPlaying = this.playing;
        if(wasPlaying){
            this.pause();
            behavior();
            this.play()
        }else{
            behavior();
        }
    }

    get duration(){
        return this._audioPlayer.duration;
    }

    get currentTime(){
        return this._audioPlayer.currentTime
    }

    get url(){
        return this._audioPlayer.currentSrc;
    }

    get guid(){
        return !!this.currentItem ? this.currentItem.guid : '';
    }

}