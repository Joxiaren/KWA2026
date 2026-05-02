import { BaseModel } from "./base-model";

export interface Rezervacija extends BaseModel{
    idOsobe: number,
    brojSobe: string,
    opis: string,
    cena: number,
    pocetakRezervacije: Date | null,
    krajRezervacije: Date | null
}