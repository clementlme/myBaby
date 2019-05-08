import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AllaitementService } from 'src/app/_service/allaitement.service';
import { Tete } from 'src/app/_model/tete.model';
var AddModalPage = /** @class */ (function () {
    function AddModalPage(modalController, allaitementService) {
        this.modalController = modalController;
        this.allaitementService = allaitementService;
        this.date = new Date().toISOString();
    }
    AddModalPage.prototype.ngOnInit = function () {
        if (this.item) {
            this.view = true;
            this.bosom = this.item.bosom;
            this.date = new Date(this.item.start).toISOString();
            this.comment = this.item.comment;
        }
    };
    AddModalPage.prototype.submit = function () {
        if (this.bosom && this.date) {
            this.allaitementService.add(this.bosom, new Date(this.date), this.comment);
            this.modalController.dismiss('add');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Tete)
    ], AddModalPage.prototype, "item", void 0);
    AddModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-modal',
            templateUrl: 'add.modal.html',
            styleUrls: ['./add.modal.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, AllaitementService])
    ], AddModalPage);
    return AddModalPage;
}());
export { AddModalPage };
//# sourceMappingURL=add.modal.js.map