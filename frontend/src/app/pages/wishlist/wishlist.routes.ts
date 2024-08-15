import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import("./wishlist.component").then(c=>c.WishlistComponent)
    }
];