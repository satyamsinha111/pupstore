import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import("./orders.component").then(c=>c.OrdersComponent)
    }
];