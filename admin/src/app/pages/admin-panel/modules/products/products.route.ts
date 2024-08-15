import { Routes } from '@angular/router';

export const product_routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./products.component").then(c=>c.ProductsComponent)
    }
];
