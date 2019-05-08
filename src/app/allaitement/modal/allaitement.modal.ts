import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AllaitementService } from 'src/app/_service/allaitement.service';
import { Tete } from 'src/app/_model/tete.model';
import { UserService } from 'src/app/_service/user.service';

@Component({
    selector: 'app-allaitement-modal',
    templateUrl: 'allaitement.modal.html',
    styleUrls: ['./allaitement.modal.scss']
})
export class AllaitementModalPage implements OnInit {

    @Input() item: Tete;

    view: boolean;
    bosom: string;
    date: string = new Date().toISOString();
    endDate: string;
    comment: string;

    constructor(
        public modalController: ModalController,
        private allaitementService: AllaitementService,
        private userService: UserService
    ) {}

    ngOnInit() {
        if (this.item) {
            this.view = true;
            this.bosom = this.item.bosom;
            this.date = new Date(this.item.start).toISOString();
            this.endDate = (this.item.end) ? new Date(this.item.end).toISOString() : null;
            this.comment = this.item.comment;
        }
    }

    submit(mode: string): void {
        if (this.bosom && this.date) {
            if (mode === 'add') {
                this.allaitementService.add(
                    this.bosom,
                    new Date(this.date),
                    this.comment,
                    this.userService.user.pseudo
                ).subscribe();
            } else if (mode === 'update') {
                this.allaitementService.update(this.item.id, this.bosom, this.date, this.endDate, this.comment).subscribe();
            }
            this.modalController.dismiss('ok');
        }
    }

}
