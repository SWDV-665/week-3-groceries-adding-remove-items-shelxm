import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title='Grocery List';

  items=[
    {
      name:'Milk',
      quantity:2,
      price: 3.10,
    },
    {
      name: 'Bread',
      quantity: 1,
      price: 2.40,
    },
    {
      name: 'Eggs (dozen)',
      quantity: 2,
      price: 2.25,
    },
    {
      name: 'Butter',
      quantity: 1,
      price: 3.40,
    },
    {
      name: "Lawry's Seasoned Salt",
      quantity: 1,
      price: 2.49,
    },
  ];
  constructor(public navController: NavController, public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
    console.log('Removing Item-', item, index);
    const toast= await this.toastController.create({
      message: 'Removing Item: ' + item.name + ' ...',
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    console.log('Adding Item');
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt= await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Items',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity'
        },
        {
          name: 'price',
          type: 'number',
          placeholder: 'Price'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await prompt.present();
  }
}
