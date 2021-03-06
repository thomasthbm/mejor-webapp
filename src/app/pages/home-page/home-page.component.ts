import { Component, OnInit } from '@angular/core';
import {Ui} from '../../utils/ui';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [Ui]
})
export class HomePageComponent implements OnInit {

  constructor(private ui: Ui) {
    localStorage.removeItem('_name');
    localStorage.removeItem('_email');
    localStorage.removeItem('_userId');
    localStorage.removeItem('_selectedDate');
   }

  ngOnInit() {
  }

  showModal(){
    this.ui.setActive('modal');
  }

  hideModal(){
    this.ui.setInactive('modal');
  }

}
