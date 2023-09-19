import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PaymentForm from './Components/Reservation/Payment_Form/PaymentForm';
import PaymentHome from './Components/Reservation/PaymentHome/PaymentHome';
import Credit from "./Components/Reservation/Payment_Form/Credit";
import AppLayout from "./AppRounting";
import GooglePay from "./Components/Reservation/Payment_Form/GooglePay";
import PayPal from "./Components/Reservation/Payment_Form/PayPal";
import Messages from "./Components/Messages/Messages";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Homes from "./Components/Homes/Homes";
const router= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    
    children:[
     
      {path:'/',element:<PaymentHome/>,children:[
        {path:'/', element:<PaymentForm/>,children:[
       
          {index:true,element:<Credit/>},
          {path:'/Credit',element:<Credit/>},
          {path:'PayPal',element:<PayPal/>},
          {path:'GooglePay',element:<GooglePay/>}
        ]},
       
      ]},
      {path:"/message",element:<Messages/>},
      {path:"/signup",element:<Register/>},
      {path:"/login",element:<Login/>},
      {path:"/host/homes",element:<Homes/>},

    
     

   
    ]
  }
])
function App() {


  return (
 
   <div>
<RouterProvider router={router}/>
   </div>
 
  )
}

export default App