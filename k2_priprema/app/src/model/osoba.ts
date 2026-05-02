import { BaseModel } from "./base-model";

export interface Osoba extends BaseModel{
    ime: string,
    prezime: string
}