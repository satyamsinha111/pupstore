import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
        path:'',
        loadChildren: ()=>import('./pages/login/login.route').then(route=>route.login_routes)
    },
    {
        path:'signup',
        loadChildren: ()=>import("./pages/signup/signup.route").then(route=>route.signup_routes)    
    },
    {
        path:'admin',
        loadChildren: ()=>import("./pages/admin-panel/admin-panel.route").then(route=>route.admin_routes)
    }
];
