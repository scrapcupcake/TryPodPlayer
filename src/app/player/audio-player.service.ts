import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/Rx';
import { Podcast, PlayerState, ApplicationState, PodcastMediaUpdate } from "../stores";
import { Store } from "@ngrx/store";

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

    constructor(private store:Store<ApplicationState>){
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

    private updateFor(time) : PlayerState{
        let update : PlayerState = {
            guid: this.currentItem.guid, 
            length: this._audioPlayer.duration,
            progress: time,
            completed: 0
        };
        this.store.dispatch(new PodcastMediaUpdate(update));
        return update;
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

    unload(){
        this.currentItem = undefined;
        this._audioPlayer.pause();
        this._audioPlayer.src = undefined;
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
            
            this._playerEvents.next(this.updateFor(0));

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