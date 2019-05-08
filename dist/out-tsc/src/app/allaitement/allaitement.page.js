import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AllaitementModalPage } from './modal/allaitement.modal';
import { AllaitementService } from '../_service/allaitement.service';
import * as Moment from 'moment';
var AllaitementPage = /** @class */ (function () {
    function AllaitementPage(modalController, alertController, allaitementService) {
        var _this = this;
        this.modalController = modalController;
        this.alertController = alertController;
        this.allaitementService = allaitementService;
        this.allaitementService.get().subscribe(function (breastfeedings) {
            _this.data = breastfeedings.data;
        });
    }
    AllaitementPage.prototype.openModal = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: AllaitementModalPage,
                            componentProps: { item: item }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (result) {
                            if (result.data === 'ok') {
                                _this.allaitementService.get().subscribe(function (breastfeedings) {
                                    _this.data = breastfeedings.data;
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AllaitementPage.prototype.done = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Tété fini ?',
                            message: "Fin de t\u00E9t\u00E9 le " + Moment().format('DD/MM') + " \u00E0 " + Moment().format('HH:mm'),
                            buttons: [
                                {
                                    text: 'Annuler',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Valider',
                                    cssClass: 'primary',
                                    handler: function () {
                                        _this.allaitementService.update(id, null, null, new Date().toISOString(), null);
                                        _this.allaitementService.get().subscribe(function (breastfeedings) {
                                            _this.data = breastfeedings.data;
                                        });
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
    AllaitementPage.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Supprimer la tété ?',
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
                                        _this.allaitementService.delete(id);
                                        _this.allaitementService.get().subscribe(function (breastfeedings) {
                                            _this.data = breastfeedings.data;
                                        });
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
    AllaitementPage.prototype.isEven = function (index) {
        return (index % 2) ? false : true;
    };
    AllaitementPage.prototype.diff = function (start, end) {
        var mStart = Moment(start);
        var mEnd = Moment(end);
        if (mEnd.diff(mStart, 'days') >= 1) {
            return mEnd.diff(mStart, 'days') + ' j';
        }
        else if (mEnd.diff(mStart, 'hours') >= 1) {
            return mEnd.diff(mStart, 'hours') + ' h';
        }
        else {
            return mEnd.diff(mStart, 'minutes') + ' mins';
        }
    };
    AllaitementPage = tslib_1.__decorate([
        Component({
            selector: 'app-allaitement',
            templateUrl: 'allaitement.page.html',
            styleUrls: ['allaitement.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AlertController,
            AllaitementService])
    ], AllaitementPage);
    return AllaitementPage;
}());
export { AllaitementPage };
//# sourceMappingURL=allaitement.page.js.map