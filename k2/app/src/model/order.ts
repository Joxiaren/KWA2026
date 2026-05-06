import { BaseModel } from "model/base-model";

export interface Order extends BaseModel{
    userId: number, 
    naziv: string,
    status: number,
    prioritet: number
}