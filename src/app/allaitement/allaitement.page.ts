import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AllaitementModalPage } from './modal/allaitement.modal';
import { AllaitementService } from '../_service/allaitement.service';
import { Tete } from '../_model/tete.model';
import * as Moment from 'moment';

@Component({
    selector: 'app-allaitement',
    templateUrl: 'allaitement.page.html',
    styleUrls: ['allaitement.page.scss']
})
export class AllaitementPage {

    data: Tete[];

    constructor(
        public modalController: ModalController,
        public alertController: AlertController,
        private allaitementService: AllaitementService
    ) {
        this.allaitementService.get().subscribe(breastfeedings => {
            this.data = breastfeedings.data;
        });
    }

    async openModal(item?: Tete): Promise<any> {
        const modal = await this.modalController.create({
            component: AllaitementModalPage,
            componentProps: { item }
        });
        modal.onDidDismiss().then(result => {
            if (result.data === 'ok') {
                this.allaitementService.get().subscribe(breastfeedings => {
                    this.data = breastfeedings.data;
                });
            }
        });
        return await modal.present();
    }

    async done(id: number): Promise<any> {
        const alert = await this.alertController.create({
            header: 'Tété fini ?',
            message: `Fin de tété le ${Moment().format('DD/MM')} à ${Moment().format('HH:mm')}`,
            buttons: [
              {
                text: 'Annuler',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {}
              }, {
                text: 'Valider',
                cssClass: 'primary',
                handler: () => {
                    this.allaitementService.update(id, null, null, new Date().toISOString(), null).subscribe(result => {
                        this.allaitementService.get().subscribe(breastfeedings => {
                            this.data = breastfeedings.data;
                        });
                    });
                }
              }
            ]
        });
        await alert.present();
    }

    async delete(id: number): Promise<any> {
        const alert = await this.alertController.create({
            header: 'Supprimer la tété ?',
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
                    this.allaitementService.delete(id).subscribe(result => {
                        this.allaitementService.get().subscribe(breastfeedings => {
                            this.data = breastfeedings.data;
                        });
                    });
                }
              }
            ]
        });
        await alert.present();
    }

    isEven(index: number): boolean {
        return (index % 2) ? false : true;
    }

    diff(start: string, end: string): string {
        const mStart = Moment(start);
        const mEnd = Moment(end);
        if (mEnd.diff(mStart, 'days') >= 1) {
            return mEnd.diff(mStart, 'days') + ' j';
        } else if (mEnd.diff(mStart, 'hours') >= 1) {
            return mEnd.diff(mStart, 'hours') + ' h';
        } else {
            return mEnd.diff(mStart, 'minutes') + ' mins';
        }
    }

    doRefresh(event): void {
        this.allaitementService.get().subscribe(breastfeedings => {
            this.data = breastfeedings.data;
            event.target.complete();
        });
    }

}
