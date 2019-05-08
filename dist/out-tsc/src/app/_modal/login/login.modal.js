import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/_service/user.service';
var LoginModalPage = /** @class */ (function () {
    function LoginModalPage(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
    }
    LoginModalPage.prototype.ngOnInit = function () { };
    LoginModalPage.prototype.submit = function () {
        var _this = this;
        this.userService.set(this.user).subscribe(function (result) {
            if (result.data) {
                localStorage.setItem('user', JSON.stringify(result.data));
                _this.modalController.dismiss();
            }
        });
    };
    LoginModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-login-modal',
            templateUrl: 'login.modal.html',
            styleUrls: ['./login.modal.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            ModalController])
    ], LoginModalPage);
    return LoginModalPage;
}());
export { LoginModalPage };
//# sourceMappingURL=login.modal.js.map