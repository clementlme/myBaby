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

@NgModule({
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
export class AllaitementPageModule { }
