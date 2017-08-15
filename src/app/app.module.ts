import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { WorldNewsPage } from '../pages/world-news/world-news';
import { PoliticsPage } from '../pages/politics/politics';
import { NjNewsPage } from '../pages/nj-news/nj-news';
import { EspnPage } from '../pages/espn/espn';
import { TechPage } from '../pages/tech/tech';
import { AndroidPage } from '../pages/android/android';
import { PallonePage } from '../pages/pallone/pallone';
import { DateFormatPipe } from '../pipes/date-format/date-format';
import { FilterPipe } from '../pipes/filter/filter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingProvider } from '../providers/loading/loading';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    WorldNewsPage,
    PoliticsPage,
    NjNewsPage,
    EspnPage,
    TechPage,
    AndroidPage,
    PallonePage,
    DateFormatPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    WorldNewsPage,
    PoliticsPage,
    NjNewsPage,
    EspnPage,
    TechPage,
    AndroidPage,
    PallonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider
  ]
})
export class AppModule {}
