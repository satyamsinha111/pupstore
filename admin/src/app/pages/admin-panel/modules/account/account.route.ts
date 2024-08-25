import { Routes } from '@angular/router';

export const account_routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./account.component").then(c=>c.AccountComponent)
    }
];