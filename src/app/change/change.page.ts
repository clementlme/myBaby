import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ChangeModalPage } from './modal/change.modal';
import { ChangeService } from '../_service/change.service';
import { Change } from '../_model/change.model';

@Component({
    selector: 'app-change',
    templateUrl: 'change.page.html',
    styleUrls: ['change.page.scss']
})
export class ChangePage {

    data: Change[];

    constructor(
        public modalController: ModalController,
        public alertController: AlertController,
        private changeService: ChangeService
    ) {
        this.changeService.get().subscribe(changes => {
            this.data = changes.data;
        });
    }

    async openModal(item?: Change) {
        const modal = await this.modalController.create({
            component: ChangeModalPage,
            componentProps: { item }
        });
        modal.onDidDismiss().then((result) => {
            if (result.data === 'ok') {
                this.changeService.get().subscribe(changes => {
                    this.data = changes.data;
                });
            }
        });
        return await modal.present();
    }

    async delete(id: number) {
        const alert = await this.alertController.create({
            header: 'Supprimer le change ?',
            message: 'Cette action est irréversible.',
            buttons: [
              {
                text: 'Annuler',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {}
              }, {
                text: 'Confirmer',
                cssClass: 'primary',
                handler: () => {
                    this.changeService.delete(id).subscribe(result => {
                        this.changeService.get().subscribe(changes => {
                            this.data = changes.data;
                        });
                    });
                }
              }
            ]
        });
        await alert.present();
    }

    doRefresh(event): void {
        this.changeService.get().subscribe(changes => {
            this.data = changes.data;
            event.target.complete();
        });
    }

}
