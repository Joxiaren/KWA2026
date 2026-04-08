import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { App } from './app';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { KlijentPage } from './pages/klijent-page/klijent-page';
import { RacunPage } from './pages/racun-page/racun-page';
import { TransakcijaPage } from './pages/transakcija-page/transakcija-page';
import { MainPage } from './pages/main-page/main-page'; 
import { GenericControl } from 'app/controls/generic-control/generic-control';
import { RacunService } from 'app/services/racun-service';

export const routes: Routes = [
    {
        path: "",
        component: MainPage,
        title: "App"
    },
    {
        path: "klijenti",
        component: KlijentPage,
        title: "Klijenti"
    },
    {
        path: "racuni",
        component: RacunPage,
        title: "Racuni"
    },
    {
        path: "transakcije",
        component: TransakcijaPage,
        title: "Transakcije"
    },
    {
        path: "**",
        component: NotFoundPage,
        title: "404"
    }
];
