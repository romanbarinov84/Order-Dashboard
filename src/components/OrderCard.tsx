import { OrderProps } from "../types/order"



const OrderCard = ({id,customer , status,phone,price}:OrderProps) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <p>Num : {id}</p>
      <h2 className="text-lg font-bold ">{customer}</h2>
      <p>{status}</p>
      <p>{phone}</p>
      <p>{price}</p>
    </div>
  )
}

export default OrderCard