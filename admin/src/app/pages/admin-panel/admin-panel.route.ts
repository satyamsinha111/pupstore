import { Routes } from '@angular/router';

export const admin_routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./admin-panel.component").then(c=>c.AdminPanelComponent),
        
        children:[
            {
                path:'',
                redirectTo:"/admin/products",
                pathMatch:"full"
            },
            {
                path:'products',
                loadChildren:()=>import("./modules/products/products.route").then(route=>route.product_routes)
            },
            {
                path:'orders',
                loadChildren:()=>import("./modules/orders/orders.route").then(route=>route.orders_routes)
            },
            {
                path:'accounts',
                loadChildren:()=>import("./modules/account/account.route").then(route=>route.account_routes)
            }
        ]
    },
];
