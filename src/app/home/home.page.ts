import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { ToastService } from '../services/toast.service';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {


	constructor(
		private navC: NavController,
		public dataService: DataService,
		public toast :ToastService
	) {

	}

	product(value) {
		if(value=="product-types"){
			this.navC.navigateForward(value)
		}else{
			this.toast.toast("Coming soon", "Unavailable")
		}
		
	}

}
