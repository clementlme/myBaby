import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/_service/user.service';

@Component({
    selector: 'app-login-modal',
    templateUrl: 'login.modal.html',
    styleUrls: ['./login.modal.scss']
})
export class LoginModalPage implements OnInit {

    user: string;

    constructor(
        private userService: UserService,
        public modalController: ModalController
    ) {}

    ngOnInit() {}

    submit(): void {
        this.userService.set(this.user).subscribe(result => {
            if (result.data) {
                localStorage.setItem('user', JSON.stringify(result.data));
                this.modalController.dismiss();
            }
        });
    }

}
