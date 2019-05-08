import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangeService } from 'src/app/_service/change.service';
import { Change } from 'src/app/_model/change.model';
import { UserService } from 'src/app/_service/user.service';

@Component({
    selector: 'app-change-modal',
    templateUrl: 'change.modal.html',
    styleUrls: ['./change.modal.scss']
})
export class ChangeModalPage implements OnInit {

    @Input() item: Change;

    view: boolean;
    date: string = new Date().toISOString();
    pee: boolean;
    poop: boolean;
    trace: boolean;
    poopRange: number;
    comment: string;

    constructor(
        public modalController: ModalController,
        private userService: UserService,
        private changeService: ChangeService
        ) {}

    ngOnInit() {
        if (this.item) {
            this.view = true;
            this.date = new Date(this.item.date).toISOString();
            this.pee = this.item.pee;
            this.poop = this.item.poop;
            this.trace = this.item.trace;
            this.poopRange = this.item.poopRange;
            this.comment = this.item.comment;
        }
    }

    submit(mode: string): void {
        if (this.date && (this.pee || this.poop || this.trace)) {
            if (mode === 'add') {
                this.changeService.add(
                    new Date(this.date),
                    this.pee,
                    this.poop,
                    this.trace,
                    this.poopRange,
                    this.comment,
                    this.userService.user.pseudo
                ).subscribe();
            } else if (mode === 'update') {
                this.changeService.update(
                    this.item.id, this.date, this.pee, this.poop, this.trace, this.poopRange, this.comment
                ).subscribe();
            }
            this.modalController.dismiss('ok');
        }
    }

}
