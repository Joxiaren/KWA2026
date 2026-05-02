import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { OsobaPage } from './pages/osoba-page/osoba-page';
import { RezervacijaPage } from './pages/rezervacija-page/rezervacija-page';
import { rolesGuard } from './guards/roles-guard';
import { LoginPage } from './pages/login-page/login-page';
import { OsobaViewPage } from 'app/pages/osoba-view-page/osoba-view-page';
import { RezervacijaViewPage } from 'app/pages/rezervacija-view-page/rezervacija-view-page';
import { RezervacijaFormPage } from 'app/pages/rezervacija-form-page/rezervacija-form-page';
import { OsobaFormPage } from 'app/pages/osoba-form-page/osoba-form-page';

export const routes: Routes = [
    {
        path: "",
        component: MainPage
    },
    {
        path: "osoba",
        component: OsobaPage,
        canActivate: [rolesGuard],
        data: { roles: ["ROLE_ADMIN"]}
    },
    {
        path:"osoba/add",
        component: OsobaFormPage,
        canActivate: [rolesGuard],
        data: { roles: ['ROLE_ADMIN']}
    },
    {
        path: "osoba/:osobaId",
        component: OsobaViewPage,
        canActivate: [rolesGuard],
        data: {roles: ["ROLE_ADMIN"]}
    },
    {
        path: "osoba/:osobaId/edit",
        component: OsobaFormPage,
        canActivate: [rolesGuard],
        data: {roles: ['ROLE_ADMIN']}
    },
    {
        path: "rezervacija",
        component: RezervacijaPage,
        canActivate: [rolesGuard],
        data: { roles: ["ROLE_ADMIN"]}
    },
    {
        path: "rezervacija/add",
        component: RezervacijaFormPage,
        canActivate: [rolesGuard],
        data: { roles: ['ROLE_ADMIIN']}
    },
    {
        path: "rezervacija/:rezervacijaId",
        component: RezervacijaViewPage,
        canActivate: [rolesGuard],
        data: {roles: ["ROLE_ADMIN"]}
    },    
    {
        path: "rezervacija/:rezervacijaId/edit",
        component: RezervacijaFormPage,
        canActivate: [rolesGuard],
        data: {roles: ["ROLE_ADMIN"]}
    },    
    {
        path: "login",
        component: LoginPage
    }
];
