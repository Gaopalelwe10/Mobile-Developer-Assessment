import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-currency-keyboard',
  templateUrl: './currency-keyboard.page.html',
  styleUrls: ['./currency-keyboard.page.scss'],
})
export class CurrencyKeyboardPage implements OnInit {

  number = ""
  data: any
  minAmountInCents = 0;
  maxAmountInCents = 0;
  sku
  constructor(
    public modalCtrl: ModalController,
    private navParams: NavParams,
    private toast: ToastService,
    private statusBar: StatusBar
  ) {
    this.statusBar.backgroundColorByHexString('#000000');
    this.data = JSON.parse(this.navParams.get('data'));
    this.minAmountInCents = this.data.customAmountItem.minAmountInCents / 100;
    this.maxAmountInCents = this.data.customAmountItem.maxAmountInCents / 100;
    this.sku = this.data.customAmountItem.sku;
  }

  ngOnInit() {

  }

  add(value) {

    var regex = /^[0-9]+(\.([0-9]{1,2})?)?$/;

    if (regex.test(this.number + value) === true) {
      this.number = this.number + value;
    }
  }
  remove() {
    this.number = this.number.slice(0, -1)
  }

  done() {
    if (parseFloat(this.number) >= this.minAmountInCents && parseFloat(this.number) <= this.maxAmountInCents) {
      this.modalCtrl.dismiss({ amountInCents: parseFloat(this.number) * 100, sku: 2305 })
      this.statusBar.backgroundColorByHexString('#2DCC57');

    } else {
      this.toast.warningToast("Please enter an amount between R" + this.minAmountInCents + " and R" + this.maxAmountInCents)
    }

  }

  close() {
    this.modalCtrl.dismiss("close");
    this.statusBar.backgroundColorByHexString('#2DCC57');

  }
}
