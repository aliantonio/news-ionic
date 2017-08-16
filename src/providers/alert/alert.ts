import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController) {
    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'Something went wrong. Please check your internet connection.',
      buttons: ['OK']
    });
    alert.present();
  }

}
