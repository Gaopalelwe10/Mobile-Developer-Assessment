import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationPage } from '../confirmation/confirmation.page';
import voucher_codes from 'voucher-code-generator'
import { CellphoneKeyboardPage } from '../cellphone-keyboard/cellphone-keyboard.page';
import { CurrencyKeyboardPage } from '../currency-keyboard/currency-keyboard.page';
import { ToastService } from 'src/app/services/toast.service';
@Component({
	selector: 'app-product-types',
	templateUrl: './product-types.page.html',
	styleUrls: ['./product-types.page.scss'],
})
export class ProductTypesPage implements OnInit {
	screen = "Product-Types"
	data: any = []

	// providerId: number;
	// providerName: string = "";
	// purchaseTypeId: number;
	// productTypeName: string = "";

	product
	productAmount: number = null;

	summary = {
		availableDoneActions: {
			appendAmount: false,
			completeScreenTitle: "",
			id: 0,
			name: ""
		},
		provider: {
			name: "",
			id: 0,
		},
		purchaseType: {
			name: "",
			id: 0,
		},
		product: {
			preDefinedAmount: {
				fixedAmountItems: {}
			},
			customAmountItem: {}
		},
		amount: {},
		pin: "",
		cellphone: "",

	}
	constructor(
		public dataService: DataService,
		public modalCtrl: ModalController,
		public toast: ToastService,
		public navC:NavController
	) {
		this.dataService.getData().subscribe(((data: any) => {
			this.data = data.data
			this.summary.availableDoneActions = this.data.availableDoneActions[0]
			console.log(data)
			console.log(this.data.availableDoneActions[0]);

		}))

	}

	ngOnInit() {
	}

	purchaseType(value) {
		console.log(value)

		this.summary.purchaseType = value;
		if (value.id <= 2) {
			this.screen = "Provider"
		} else if (value.id == 3) {
			this.summary.product = this.data.products.find((data) => data.purchaseTypeId == this.summary.purchaseType.id);
			this.screen = "Amount";
		} else {
			this.toast.toast("Coming soon", "Unavailable")
		}

	}

	provider(value) {
		console.log(value)

		if (value.id !=6) {
			this.summary.provider = value
			this.summary.product = this.data.products.find((data) => data.purchaseTypeId == this.summary.purchaseType.id && data.providerId == this.summary.provider.id);
			this.screen = "Amount";
		}else {
			this.toast.toast("Coming soon", "Unavailable")
		}
	
	}

	productFuntion(value) {
		console.log(value)
		this.productAmount = value.amountInCents;
		this.summary.amount = value;
		if (this.summary.purchaseType.id == 2) {
			this.screen = "Cellphone";
		} else {
			this.screen = "Summary";
			this.productAmount = value.amountInCents;
			this.summary.availableDoneActions.appendAmount = true
		}

	}

	async cellphone() {
		const modal = await this.modalCtrl.create({
			component: CellphoneKeyboardPage,
		});

		modal.onDidDismiss().then(data => {

			if (data['role'] != 'backdrop') {
				if (data.data != 'close') {
					this.screen = "Summary";
					this.summary.cellphone = data.data.Cellphone
					this.summary.availableDoneActions.appendAmount = true
				}
			}
		});

		return await modal.present();
	}
	phoneFormat(input) {
		input = input.replace(/\D/g, '');
		var size = input.length;
		if (size > 0) { input = " " + input }
		if (size > 3) { input = input.slice(0, 4) + "  " + input.slice(4, 11) }
		if (size > 6) { input = input.slice(0, 9) + " " + input.slice(9) }
		return input;
	  }
	async sell() {

		if (this.dataService.amount >= this.productAmount / 100) {
			this.dataService.amount = this.dataService.amount - this.productAmount / 100
			const pin = voucher_codes.generate({
				length: 12,
				count: 1,
				charset: "0123456789"
			})
			this.summary.pin = pin[0]
		} else {
			this.toast.warningToast("You have insufficient balance")
			return
		}


		console.log(this.summary);

		const modal = await this.modalCtrl.create({
			component: ConfirmationPage,
			componentProps: {
				summary: JSON.stringify(this.summary),
			},
		});

		modal.onDidDismiss().then(data => {

			if (data['role'] != 'backdrop') {
				if (data.data != 'close') {
					
				}else{
					this.navC.navigateForward("home")
				}
			}
		});

		return await modal.present();

	}

	async selectOwnAmount() {
		let customAmountItem = this.summary.product.preDefinedAmount

		const modal = await this.modalCtrl.create({
			component: CurrencyKeyboardPage,
			componentProps: {
				data: JSON.stringify(customAmountItem),
			},
		});

		modal.onDidDismiss().then(data => {

			if (data['role'] != 'backdrop') {
				if (data.data != 'close') {
					this.summary.amount = data.data
					this.productAmount = data.data.amountInCents;
					if (this.summary.purchaseType.id == 2) {
						this.screen = "Cellphone";
					} else {
						this.screen = "Summary";
						this.summary.availableDoneActions.appendAmount = true
					}

				}
			}
		});

		return await modal.present();

	}
}
