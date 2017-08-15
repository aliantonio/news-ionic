import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NjNewsPage } from './nj-news';

@NgModule({
  declarations: [
    NjNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NjNewsPage),
  ],
})
export class NjNewsPageModule {}
