import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { ChangePage } from './change.page';
import { ChangeModalPage } from './modal/change.modal';
import { ChangeService } from '../_service/change.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        OrderModule,
        RouterModule.forChild([{ path: '', component: ChangePage }])
    ],
    providers: [ChangeService],
    declarations: [ChangePage, ChangeModalPage],
    entryComponents: [ChangeModalPage]
})
export class ChangePageModule { }
