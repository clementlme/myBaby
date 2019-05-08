import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ChangePage } from './change.page';
import { ChangeModalPage } from './modal/change.modal';
import { ChangeService } from '../_service/change.service';
var ChangePageModule = /** @class */ (function () {
    function ChangePageModule() {
    }
    ChangePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                OrderModule,
                RouterModule.forChild([{ path: '', component: ChangePage }])
            ],
            providers: [ChangeService],
            declarations: [ChangePage, ChangeModalPage],
            entryComponents: [ChangeModalPage]
        })
    ], ChangePageModule);
    return ChangePageModule;
}());
export { ChangePageModule };
//# sourceMappingURL=change.module.js.map