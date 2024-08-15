import { Routes } from '@angular/router';

export const login_routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./login.component").then(c=>c.LoginComponent)
    }
];
