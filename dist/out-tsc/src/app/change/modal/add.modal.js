import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangeService } from 'src/app/_service/change.service';
import { Change } from 'src/app/_model/change.model';
var AddModalPage = /** @class */ (function () {
    function AddModalPage(modalController, changeService) {
        this.modalController = modalController;
        this.changeService = changeService;
        this.date = new Date().toISOString();
    }
    AddModalPage.prototype.ngOnInit = function () {
        if (this.item) {
            this.view = true;
            this.date = new Date(this.item.date).toISOString();
            this.pee = this.item.pee;
            this.poop = this.item.poop;
            this.trace = this.item.trace;
            this.comment = this.item.comment;
        }
    };
    AddModalPage.prototype.submit = function (mode) {
        if (this.date && (this.pee || this.poop || this.trace)) {
            if (mode === 'add') {
                this.changeService.add(new Date(this.date), this.pee, this.poop, this.trace, this.comment);
            }
            else if (mode === 'update') {
                this.changeService.update(this.item.id, this.date, this.pee, this.poop, this.this.comment);
            }
            this.modalController.dismiss('ok');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Change)
    ], AddModalPage.prototype, "item", void 0);
    AddModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-modal',
            templateUrl: 'add.modal.html',
            styleUrls: ['./add.modal.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, ChangeService])
    ], AddModalPage);
    return AddModalPage;
}());
export { AddModalPage };
//# sourceMappingURL=add.modal.js.map