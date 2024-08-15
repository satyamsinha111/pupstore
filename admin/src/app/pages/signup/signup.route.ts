import { Routes } from '@angular/router';

export const signup_routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./signup.component").then(c=>c.SignupComponent)
    }
];
