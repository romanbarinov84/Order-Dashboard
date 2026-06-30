import OrderCard from "@/src/components/OrderCard";
import { orders } from "@/src/data/orders";



export default function Home() {
   


  return (
   <>
   <h1>Order Dashboard Main Page</h1>
   <div className="p-4">
    <h2 className="text-lg font-bold text-green-400">
      Заказы
    </h2>
    {
      orders.map((order) => (
        <OrderCard
        key={order.id}
        id={order.id}
        customer={order.customer}
        status={order.status}
        phone={order.phone}
        price={order.price}
        />
      ))
    }
   </div>
   
   </>
  );
}
