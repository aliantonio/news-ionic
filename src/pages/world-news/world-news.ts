import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { LoadingProvider } from '../../providers/loading/loading'
import { AlertProvider } from '../../providers/alert/alert'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-world-news',
  templateUrl: 'world-news.html',
})
export class WorldNewsPage {

  results: string[];

  constructor(public navCtrl: NavController, private http: Http, private load: LoadingProvider, private alert: AlertProvider) {

    // show loading module
    this.load.show();

    // subscribe to articles
    this.subscribeToArticles();

  }
  
  public subscribeToArticles() {
    this.fetchArticles()
      .subscribe(
        // success
        data => {
          console.log('/r/worldnews results:', data['data'].children);
          this.results = data['data'].children;
          this.load.hide();
        },
        // error
        err => {
          this.load.hide();
          console.error('Something went wrong!');
          this.alert.showAlert();
        }
      );
  }

  fetchArticles() {
    // make the HTTP request
    console.log('fetching articles from /r/worldnews');
    return this.http.get('https://pay.reddit.com/r/worldnews/.json')
      .timeout(10000)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError)
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }
  
  private catchError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error.");
  }

  openUrl(url) {
    window.open(url, '_system', 'location=yes');
  }

  doRefresh(refresher) {
    console.log('refresh called', refresher);
    this.subscribeToArticles();
    refresher.complete();
  }

}
