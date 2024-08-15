import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import("./products.component").then(c=>c.ProductsComponent)
    },
    {
        path:':id',
        loadComponent:()=>import("./product-detail/product-detail.component").then(c=>c.ProductDetailComponent)
    }
];