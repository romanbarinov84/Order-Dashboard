import { Status } from "../utils/status";

export interface OrderProps{
    id:number;
    customer:string;
    status:Status;
    phone:string;
    price:number;
}