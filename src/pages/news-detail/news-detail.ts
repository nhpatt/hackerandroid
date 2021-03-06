import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

/*
 Generated class for the NewsDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage implements OnInit {

  ngOnInit(): void {
    console.log(this.navParams.get('story').title)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

}
