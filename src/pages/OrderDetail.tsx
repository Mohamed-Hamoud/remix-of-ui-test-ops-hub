import { useParams } from "react-router-dom";
import { OrderInfoCard } from "@/components/orders/OrderInfoCard";
import { OrderItemCard } from "@/components/orders/OrderItemCard";
import { OrderTotals } from "@/components/orders/OrderTotals";
import { OrderTimeline } from "@/components/orders/OrderTimeline";
import { OrderCustomer } from "@/components/orders/OrderCustomer";
import { OrderStatusBanner } from "@/components/orders/OrderStatusBanner";
import { OrderCourierDetails } from "@/components/orders/OrderCourierDetails";
import { OrderEvaluationDetails } from "@/components/orders/OrderEvaluationDetails";
import { OrderRefundSection } from "@/components/orders/OrderRefundSection";
import { PageHeader } from "@/components/shared/PageHeader";
 
 // Mock order data
 const orderData = {
   id: "DF-268-FF3A-040226",
   internalId: "66",
   created: "2026-02-04 11:24",
   extDeliveryFee: "0.00",
   gatewayFee: "16.10",
   earnPoints: "503",
   branch: "Damascus Delivery",
   address: "Menara TA One, 22, Jalan P. Ramlee, Kuala Lumpur, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
   customer: {
     name: "Aisyah Binti Rahman",
     phone: "+6012-345-6008",
     device: "Android",
   },
   items: [
      {
        name: "Nasi Lemak",
        qty: 10,
        price: "15.00",
        total: "47.00",
        note: "EXTRA SALSA SAUCE",
        addons: [{ name: "Barbican Flavors", qty: 1, price: "2.00" }],
        modifiers: [
          { name: "Barbican Flavors — Barbican Flavors", price: "10.00" },
          { name: "Barbican Flavors — Barbican Flavors", price: "10.00" },
          { name: "Barbican Flavors — Barbican Flavors", price: "10.00" },
        ],
      },
      {
        name: "Roti Canai",
        qty: 5,
        price: "8.00",
        total: "40.00",
        addons: [],
        modifiers: [],
      },
      {
        name: "Teh Tarik",
        qty: 3,
        price: "5.00",
        total: "15.00",
        note: "LESS SUGAR",
        addons: [],
        modifiers: [],
      },
   ],
   subtotal: "470.00",
   tax: "28.20",
   deliveryFee: "5.00",
   total: "503.20",
  history: [
    { status: "New", date: "2026-02-04 11:24" },
    { status: "Payment Failed", date: "2026-02-04 11:24" },
    { status: "Payment Confirmed", date: "2026-02-04 11:25" },
    { status: "Ready To Prepare", date: "2026-02-04 11:26" },
    { status: "Kitchen Accepted", date: "2026-02-04 19:04" },
    { status: "Ready To Deliver", date: "2026-02-04 19:30" },
    { status: "Assigning Driver", date: "2026-02-04 19:31" },
    { status: "Delivery Picked Up", date: "2026-02-04 19:45" },
    { status: "Completed", date: "2026-02-04 20:10", isCompleted: true },
  ],
  status: "accepted",
  courier: {
    name: "MUHAMAD SHARIFUL AMRIE B. MOHD AFANDI",
    phone: "60132055720",
    receiptUrl: "https://api.grab.com/ge/rcpt/ekVVb099",
  },
  evaluation: {
    foodEvaluation: "Followed Instructions",
    driverName: "MOHD ZHARIF BIN KAUZI",
    note: "The order took about 2 hours to arrive... It's really unbelievable",
  },
};

export default function OrderDetail() {
   const { id } = useParams();
 
   return (
     <div className="space-y-6">
       <PageHeader
         title={`Order ${orderData.id}`}
         backLink="/orders"
         backLabel="Orders"
       />
 
       {/* Main Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Left Column - Order Info & Items */}
         <div className="space-y-6 lg:col-span-2">
            <OrderInfoCard
              orderId={orderData.id}
              internalId={orderData.internalId}
              created={orderData.created}
              extDeliveryFee={orderData.extDeliveryFee}
              gatewayFee={orderData.gatewayFee}
              earnPoints={orderData.earnPoints}
              branch={orderData.branch}
              address={orderData.address}
            />
 
           {/* Items */}
           <div className="rounded-lg border bg-card p-4 card-shadow">
             <h2 className="mb-4 section-title">Items</h2>
             <div className="space-y-4">
               {orderData.items.map((item, index) => (
                  <OrderItemCard
                    key={index}
                    name={item.name}
                    qty={item.qty}
                    price={item.price}
                    total={item.total}
                    addons={item.addons}
                    modifiers={item.modifiers}
                    note={item.note}
                    emoji="🍛"
                  />
               ))}
               <OrderTotals
                 subtotal={orderData.subtotal}
                 tax={orderData.tax}
                 deliveryFee={orderData.deliveryFee}
                 total={orderData.total}
               />
             </div>
           </div>
 
        {/* Refund History */}
            <OrderRefundSection orderTotal={orderData.total} />
         </div>
 
         {/* Right Column */}
          <div className="space-y-6">
            <OrderStatusBanner status={orderData.status} />
            <OrderCustomer {...orderData.customer} />
            <OrderTimeline events={orderData.history} />
 
          {/* Courier Details */}
            <OrderCourierDetails {...orderData.courier} />

            {/* Evaluation Details */}
            <OrderEvaluationDetails {...orderData.evaluation} />
         </div>
       </div>
     </div>
   );
 }