import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { AudioProvider } from '../../../providers/audio/audio';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersComponent {

  options : InAppBrowserOptions = {
      location : 'no',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'no',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'yes', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };

  loader : any;
  conventionList : any;
  convs: Array<any>;

  constructor (private AudioProvider : AudioProvider,
               public loadingCtrl: LoadingController,
               public plt: Platform,
               private theInAppBrowser: InAppBrowser )  {

    this.loader = this.loadingCtrl.create({
    content: "Loading Speakers List..."
    });
    this.loader.present();
    this.getAllSpeakers();

  }

  getAllSpeakers(){
    this.AudioProvider.getConventions().subscribe((data)=>{
      this.conventionList = data;
      this.conventionList = Array.of(this.conventionList);
      this.loader.dismiss();
    });
  }

  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }

}
