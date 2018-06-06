import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RaceServiceProvider } from '../../providers/race-service/race-service';

/**
 * Generated class for the RacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-race',
  templateUrl: 'race.html',
})
export class RacePage {

  results : any;
  display_results: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public raceServiceProvider : RaceServiceProvider) {
    this.display_results = false;
  }

  SimulateRace(){
    this.raceServiceProvider.SimulateRace().then(data => {
      this.results = data;
      this.display_results = true;
      console.log(JSON.stringify(this.results));
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RacePage');
  }


  

}
