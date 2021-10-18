import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  data: any
  isOpen: Boolean = false;
  constructor(
    public modalCtrl: ModalController,
    private navParams: NavParams,
  ) {
    this.data = JSON.parse(this.navParams.get('summary'))
    console.log(this.data);

  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss("close");
  }
  formatPin(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
  }
  phoneFormat(input) {
    input = input.replace(/\D/g, '');
    var size = input.length;
    if (size > 0) { input = " " + input }
    if (size > 3) { input = input.slice(0, 4) + "  " + input.slice(4, 11) }
    if (size > 6) { input = input.slice(0, 9) + " " + input.slice(9) }
    return input;
  }
}
