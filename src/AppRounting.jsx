
import React from 'react';

import { Outlet } from 'react-router-dom';

import PaymentNavbar from './Components/Reservation/Payment_Nav/PaymentNavbar';
import Footer from './Components/Reservation/Footer/Footer';

const AppLayout = () => {

    //  const language=   useSelector((state)=>state.language.language)
    return (
     <>
<PaymentNavbar/>

<div className="container mt-5">

     <div className="container">
   
     <Outlet/>

     </div>
</div>

<Footer/>  
     </>
    );
}

export default AppLayout;