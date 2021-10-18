import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-cellphone-keyboard',
  templateUrl: './cellphone-keyboard.page.html',
  styleUrls: ['./cellphone-keyboard.page.scss'],
})
export class CellphoneKeyboardPage implements OnInit {
  number = ""

  constructor(
    public modalCtrl: ModalController,
    private toast: ToastService,
    private statusBar: StatusBar
  ) {
    this.statusBar.backgroundColorByHexString('#000000');
  }

  ngOnInit() {
  }

  add(value) {
    if (this.number.length < 10) {
      this.number = this.number + value;
    }

  }
  remove() {
    this.number = this.number.slice(0, -1)
  }

  phoneFormat(input) {
    input = input.replace(/\D/g, '');
    var size = input.length;
    if (size > 0) { input = " " + input }
    if (size > 3) { input = input.slice(0, 4) + "  " + input.slice(4, 11) }
    if (size > 6) { input = input.slice(0, 9) + " " + input.slice(9) }
    return input;
  }

  done() {
    var trimmed = this.number.replace(/\s/g, '');

    var regex = /^0(6|7|8){1}[0-9]{1}[0-9]{7}$/;

    if (regex.test(trimmed) === true) {
      this.modalCtrl.dismiss({ Cellphone: this.number });
      this.statusBar.backgroundColorByHexString('#2DCC57');

    } else {
      console.log("no");
      this.toast.warningToast("Invalid phone number format (ex. 082 123 4568)")
    }

  }

  close() {
    this.modalCtrl.dismiss("close");
    this.statusBar.backgroundColorByHexString('#2DCC57');

  }
}
