import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
 
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})
export class ProfilePage implements AfterViewInit, OnDestroy {

  ngOnDestroy(): void {
    this.qrScanner.hide();
    this.hideCamera();
  }
  ngAfterViewInit(): void {
    this.scan();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {

  }
  scan() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {

          console.log('Camera Permission Given');
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.qrScanner.hide();
            scanSub.unsubscribe();
            this.hideCamera();
          });
          this.showCamera();
          this.qrScanner.show();
        } else if (status.denied) {
          console.log('Camera permission denied');
        } else {
          console.log('Permission denied for this runtime.');
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }
}
