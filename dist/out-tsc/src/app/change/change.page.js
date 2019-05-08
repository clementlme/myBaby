import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ChangeModalPage } from './modal/change.modal';
import { ChangeService } from '../_service/change.service';
var ChangePage = /** @class */ (function () {
    function ChangePage(modalController, alertController, changeService) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.changeService = changeService;
        this.data = this.changeService.get();
    }
    ChangePage.prototype.openModal = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ChangeModalPage,
                            componentProps: { item: item }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (result) {
                            if (result.data === 'ok') {
                                _this.data = _this.changeService.get();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChangePage.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Supprimer le change ?',
                            message: 'Cette action est irréversible.',
                            buttons: [
                                {
                                    text: 'Annuler',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmer',
                                    cssClass: 'primary',
                                    handler: function () {
                                        _this.changeService.delete(id);
                                        _this.data = _this.changeService.get();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangePage = tslib_1.__decorate([
        Component({
            selector: 'app-change',
            templateUrl: 'change.page.html',
            styleUrls: ['change.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AlertController,
            ChangeService])
    ], ChangePage);
    return ChangePage;
}());
export { ChangePage };
//# sourceMappingURL=change.page.js.map