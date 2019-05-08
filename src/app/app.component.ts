import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginModalPage } from './_modal/login/login.modal';
import { UserService } from './_service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private userService: UserService,
        public modalController: ModalController
    ) {
        this.initializeApp();
    }

    initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.userService.isLogged()) {
                this.userService.getById(this.userService.user._id).subscribe(result => {
                    if (!result.data) {
                        this.openModal();
                    }
                });
            } else {
                this.openModal();
            }
        });
    }

    async openModal(): Promise<any> {
        const modal = await this.modalController.create({
            component: LoginModalPage,
            componentProps: { }
        });
        return await modal.present();
    }

}
