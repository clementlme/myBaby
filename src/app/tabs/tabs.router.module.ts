import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
