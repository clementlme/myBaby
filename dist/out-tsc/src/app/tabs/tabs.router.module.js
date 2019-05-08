import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'allaitement',
                children: [
                    {
                        path: '',
                        loadChildren: '../allaitement/allaitement.module#AllaitementPageModule'
                    }
                ]
            },
            {
                path: 'change',
                children: [
                    {
                        path: '',
                        loadChildren: '../change/change.module#ChangePageModule'
                    }
                ]
            },
            {
                path: 'frais',
                children: [
                    {
                        path: '',
                        loadChildren: '../frais/frais.module#FraisPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/allaitement',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/allaitement',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map