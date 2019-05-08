import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AllaitementService } from 'src/app/_service/allaitement.service';
import { Tete } from 'src/app/_model/tete.model';
var UpdateModalPage = /** @class */ (function () {
    function UpdateModalPage(modalController, allaitementService) {
        this.modalController = modalController;
        this.allaitementService = allaitementService;
        this.date = new Date().toISOString();
    }
    UpdateModalPage.prototype.ngOnInit = function () {
    };
    UpdateModalPage.prototype.submit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Tete)
    ], UpdateModalPage.prototype, "item", void 0);
    UpdateModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-update-modal',
            templateUrl: 'update.modal.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, AllaitementService])
    ], UpdateModalPage);
    return UpdateModalPage;
}());
export { UpdateModalPage };
//# sourceMappingURL=update.modal.js.map