import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PallonePage } from './pallone';

@NgModule({
  declarations: [
    PallonePage,
  ],
  imports: [
    IonicPageModule.forChild(PallonePage),
  ],
})
export class PallonePageModule {}
