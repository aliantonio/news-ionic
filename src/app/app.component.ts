import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewsPage } from '../pages/news/news';
import { WorldNewsPage } from '../pages/world-news/world-news';
import { PoliticsPage } from '../pages/politics/politics';
import { NjNewsPage } from '../pages/nj-news/nj-news';
import { EspnPage } from '../pages/espn/espn';
import { TechPage } from '../pages/tech/tech';
import { AndroidPage } from '../pages/android/android';
import { PallonePage } from '../pages/pallone/pallone';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NewsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: NewsPage },
      { title: 'World News', component: WorldNewsPage },
      { title: 'Politics', component: PoliticsPage },
      { title: 'NJ News', component: NjNewsPage },
      { title: 'ESPN', component: EspnPage },
      { title: 'Technology', component: TechPage },
      { title: 'Android', component: AndroidPage },
      { title: 'Pallone', component: PallonePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
