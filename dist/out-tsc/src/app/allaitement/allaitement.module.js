import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { AllaitementPage } from './allaitement.page';
import { AllaitementModalPage } from './modal/allaitement.modal';
import { AllaitementService } from '../_service/allaitement.service';
var AllaitementPageModule = /** @class */ (function () {
    function AllaitementPageModule() {
    }
    AllaitementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                HttpClientModule,
                OrderModule,
                RouterModule.forChild([{ path: '', component: AllaitementPage }])
            ],
            providers: [AllaitementService],
            declarations: [AllaitementPage, AllaitementModalPage],
            entryComponents: [AllaitementModalPage]
        })
    ], AllaitementPageModule);
    return AllaitementPageModule;
}());
export { AllaitementPageModule };
//# sourceMappingURL=allaitement.module.js.map