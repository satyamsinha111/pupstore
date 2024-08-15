import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadChildren: ()=>import("./pages/login/login.routes").then(route=>route.routes)
    },
    {
        path:'register',
        loadChildren:()=>import("./pages/register/register.routes").then(route=>route.routes)
    },
    {
        path:'products',
        loadChildren:()=>import("./pages/products/products.routes").then(route=>route.routes)
    },
    {
        path:"mywishlist",
        loadChildren: ()=>import("./pages/wishlist/wishlist.routes").then(route=>route.routes)
    },
    {
        path:'mycart',
        loadChildren: ()=>import("./pages/cart/cart.route").then(route=>route.routes)
    }

];
