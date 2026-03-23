interface Transakcija{
    id: number,
    tip: string,
    iznos: number,
    datumTransakcije: Date
    klijentId: number,
    racunId: number
}