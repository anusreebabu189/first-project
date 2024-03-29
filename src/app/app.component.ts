import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { ParentProfilePage } from '../pages/parent-profile/parent-profile';
import { Login1Page } from '../pages/login1/login1';
import { CoursePage } from '../pages/course/course';
import { DashboardPage } from '../pages/dashboard/dashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login1Page;
  menuCtrl: any;
  app: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  parentprofile() {
    console.log("My account")
    this.rootPage=ParentProfilePage;
  }
  subscription() {
    console.log("Subscription")
    this.rootPage=SubscriptionPage;
  }
    logoutClicked() {
      console.log("Logout");
      this.rootPage=Login1Page;
  }
  course()
  {
    this.rootPage=CoursePage;
  }
}

