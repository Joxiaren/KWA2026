interface Transakcija extends GenericModel<number>{
    tip: string,
    iznos: number,
    datumTransakcije: Date
    klijentId: number,
    racunId: number
}

