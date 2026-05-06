import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { rolesGuard } from './guards/roles-guard';
import { LoginPage } from './pages/login-page/login-page';
import { OrderPage } from 'app/pages/order-page/order-page';
import { OrderDetailViewPage } from 'app/pages/order-detail-view-page/order-detail-view-page';

export const routes: Routes = [
    {
        path: "",
        component: MainPage
    },
    {
        path: "orders",
        component: OrderPage,
        canActivate: [rolesGuard],
        data: { roles: ['ROLE_ADMIN']}
    },
    {
        path: "orders/:id",
        component: OrderDetailViewPage,
        canActivate: [rolesGuard],
        data: { roles: ['ROLE_ADMIN']}
    },
    {
        path: "login",
        component: LoginPage
    }
];
