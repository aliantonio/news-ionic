import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspnPage } from './espn';

@NgModule({
  declarations: [
    EspnPage,
  ],
  imports: [
    IonicPageModule.forChild(EspnPage),
  ],
})
export class EspnPageModule {}
