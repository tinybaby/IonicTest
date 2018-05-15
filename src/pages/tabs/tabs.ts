import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BasicPage } from '../navigation/navigation'
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BasicPage;
  tab2Root = AboutPage;
  tab3Root = ProfilePage;

  constructor() {

  }
  select($event: any) {
  

  }
}
