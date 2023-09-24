import React from 'react'
import './PaymentForm.css'
import Form from 'react-bootstrap/Form';
import { FaCcVisa, FaPaypal, FaGooglePay, } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Credit from './Credit';
import Dropdown from 'react-bootstrap/Dropdown';

const PaymentForm = () => {

    // const navigate = useNavigate();

    // const handleSelectChange = (event) => {
    //   const selectedOption = event.target.value;
    //   switch (selectedOption) {
    //     case 'credit':
    //       navigate('/PaymentHome/Payment/Credit');
    //       break;
    //     case 'paypal':
    //       navigate('/PaymentHome/Payment/PayPal');
    //       break;
    //     case 'googlepay':
    //       navigate('/PaymentHome/Payment/GooglePay');
    //       break;
    //     default:
    //       break;
    //   }
    // };
  return (
    <div>
{/* <div className="d-flex align-items-center justify-content-between ">
    <h3>Pay with</h3>
    <div className="d-flex align-items-center img_payment">
        <img className='img__small'
         src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg" alt="" />
        <img className='img__small' 
        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg" alt="" />
        <img className='img__small' 
        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg" alt="" />
        <img className='img__small'
         src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg" alt="" />
        <img className='img__small'
         src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg" alt="" />
        <img className='img__small'
         src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg" alt="" />
    </div>
   
</div> */}
<div className="my-3">

    {/* <Form.Select
    className='shadow-none'
      size="lg"
      style={{ padding: '17px 5px' }}
      onChange={handleSelectChange}
    >
      <option value="credit">
        <FaCcVisa style={{ color: 'red' }} /> Credit or debit card
      </option>
      <option value="paypal">
        <Link to="/PayPal">
          <FaPaypal /> PayPal
        </Link>
      </option>
      <option value="googlepay">
        <Link to="/GooglePay">
          <FaGooglePay /> Google Pay
        </Link>
      </option>
    </Form.Select> */}
    {/* <Dropdown className='w-100 border'>
      <Dropdown.Toggle variant="white" id="dropdown-basic" className='w-100'>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">
        <Link to="Payment/Credit">
        <FaCcVisa/> Credit
        </Link>
      </Dropdown.Item>
        <Dropdown.Item href="">
        <Link to="Payment/PayPal">
          <FaPaypal /> PayPal
        </Link>
        </Dropdown.Item>
        <Dropdown.Item href="">

        <Link to="Payment/GooglePay">
          <FaGooglePay /> Google Pay
        </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

</div>
    <div className="my4 ">
        {/* <Credit/> */}
    <Outlet/>
    </div>

   
    </div>
 
  )
}

export default PaymentForm
