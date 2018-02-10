import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { JftProvider } from '../../../providers/jft/jft';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-justfortoday',
  templateUrl: 'justfortoday.html'
})

export class JustfortodayComponent {

   jft : string;
   loader = null;

  constructor(private JftProvider : JftProvider , public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
          content: "Loading Just For Today..."
        });
    this.loader.present();
    this.getJFT();
  }

  getJFT(){
    this.JftProvider.getJFT().subscribe((data)=>{
      this.jft = data;
      this.loader.dismiss();
    });
  }

}
