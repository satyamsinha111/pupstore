import { Routes } from '@angular/router';

export const orders_routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./orders.component").then(c=>c.OrdersComponent)
    }
];