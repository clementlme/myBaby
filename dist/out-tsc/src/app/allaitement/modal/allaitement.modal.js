import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AllaitementService } from 'src/app/_service/allaitement.service';
import { Tete } from 'src/app/_model/tete.model';
var AllaitementModalPage = /** @class */ (function () {
    function AllaitementModalPage(modalController, allaitementService) {
        this.modalController = modalController;
        this.allaitementService = allaitementService;
        this.date = new Date().toISOString();
    }
    AllaitementModalPage.prototype.ngOnInit = function () {
        if (this.item) {
            this.view = true;
            this.bosom = this.item.bosom;
            this.date = new Date(this.item.start).toISOString();
            this.endDate = (this.item.end) ? new Date(this.item.end).toISOString() : null;
            this.comment = this.item.comment;
        }
    };
    AllaitementModalPage.prototype.submit = function (mode) {
        if (this.bosom && this.date) {
            if (mode === 'add') {
                this.allaitementService.add(this.bosom, new Date(this.date), this.comment).subscribe();
            }
            else if (mode === 'update') {
                this.allaitementService.update(this.item.id, this.bosom, this.date, this.endDate, this.comment);
            }
            this.modalController.dismiss('ok');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Tete)
    ], AllaitementModalPage.prototype, "item", void 0);
    AllaitementModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-allaitement-modal',
            templateUrl: 'allaitement.modal.html',
            styleUrls: ['./allaitement.modal.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, AllaitementService])
    ], AllaitementModalPage);
    return AllaitementModalPage;
}());
export { AllaitementModalPage };
//# sourceMappingURL=allaitement.modal.js.map