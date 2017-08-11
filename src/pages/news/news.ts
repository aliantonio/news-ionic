import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { LoadingProvider } from '../../providers/loading/loading'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  results: string[];
  // @ViewChild('searchInput') oElement;

  constructor(public navCtrl: NavController, private http: Http, private load: LoadingProvider) {

    // show loading module
    this.load.show();

    // make the HTTP request
    this.getArticles()
      .subscribe(
        // success
        data => {
          console.log(data['data'].children);
          this.results = data['data'].children;
          this.load.hide();
        },
        // error
        err => {
          this.load.hide();
          console.error('Something went wrong!');
        }
      );
  }

  getArticles() {
    return this.http.get('https://pay.reddit.com/r/news/.json')
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError)
    //     // Make the HTTP request:
    //     this.http.get('https://pay.reddit.com/r/news/.json')
    //       .subscribe(
    //       // Successful responses call the first callback.
    //       data => {
    //         console.log('/r/news results', data);
    // //        this.results = data['data'].children;
    //      //   this.load.hide();
    //       },
    //       // Errors will call this callback instead:
    //       err => {
    //         console.error('Something went wrong!');
    //        // this.load.hide();
    //       });
    //     // focus on search input
    // //    this.oElement.nativeElement.focus();
    
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

  openUrl(url, event) {
    console.log('url', url);
    event.stopPropagation();
    event.preventDefault();
    window.open(url, '_system', 'location=yes');
  }

}
