import { OrderProps } from '../types/order';
import {  STATUS_CONFIG } from '../utils/status';



const OrderCard = ({ id, customer, status, phone, price }: OrderProps) => {

  const config = STATUS_CONFIG[status];
    return (
        <div className="border rounded-lg p-4 mb-4">
            <p>Num : {id}</p>
            <h2 className="text-lg font-bold ">{customer}</h2>
            <p className={config.color}>{status}</p>
            <p>{config.text}</p>
            <p>{phone}</p>
            <p>{price}</p>
        </div>
    );
};

export default OrderCard;
