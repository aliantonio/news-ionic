import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { LoadingProvider } from '../../providers/loading/loading'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-nj-news',
  templateUrl: 'nj-news.html',
})
export class NjNewsPage {

  results: string[];
  appendUrl = '?rss_url=http%3A%2F%2Fnewjersey.news12.com%2F%3Fclienttype%3Drss';

  constructor(public navCtrl: NavController, private http: Http, private load: LoadingProvider) {

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
          console.log('NJ News results:', data['items']);
          this.results = data['items'];
          this.load.hide();
        },
        // error
        err => {
          this.load.hide();
          console.error('Something went wrong!');
        }
      );
  }

  fetchArticles() {
    // make the HTTP request
    console.log('fetching articles from nj news');
    return this.http.get('http://api.rss2json.com/v1/api.json' + this.appendUrl)
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