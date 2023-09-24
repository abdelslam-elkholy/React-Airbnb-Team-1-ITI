import React, { useState } from "react";
import { Controller,useForm } from "react-hook-form";
import { FaCheck } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Footer from './../Footer/Footer';




const Credit = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [regions, setRegions] = useState({
    selectedRegion: 'Egypt', // Default selected region
    availableRegions: [
      { name: 'Egypt', selected: true },
      { name: 'USA', selected: false },
      { name: 'Canada', selected: false },
      { name: 'Malysia', selected: false },
      { name: 'UTA', selected: false },
      { name: 'England', selected: false },
      { name: 'Lebanone', selected: false },
      { name: 'Australia', selected: false },
      { name: 'Japan', selected: false },
      { name: 'China', selected: false },
      { name: 'Other', selected: false },
    ], // List of available regions with selection state
  });

  const [showModal, setShowModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handleRegionSelect = (selectedRegion) => {
    setRegions((prevRegions) => {
      const updatedRegions = prevRegions.availableRegions.map((region) => {
        if (region.name === selectedRegion) {
          return { ...region, selected: true };
        } else {
          return { ...region, selected: false };
        }
      });
      return { ...prevRegions, selectedRegion, availableRegions: updatedRegions };
    });
    setShowModal(false); // Close the modal after selecting a region
  };
  const [Phoneregions, setPhoneRegions] = useState({
    selectedPhoneRegion: 'Egypt (+20)', // Default selected region
    availablePhoneRegions: [
      { name: 'Egypt (+20)', selected: true },
      { name: 'El Salvador (+503)', selected: false },
      { name: 'Equatorial Guinea (+240)', selected: false },
      { name: 'Eritrea (+291)', selected: false },
      { name: 'Estonia (+372)', selected: false },
      { name: 'Eswatini (+268)', selected: false },
      { name: 'Ethiopia (+251)', selected: false },
      { name: 'France (+33)', selected: false },
      { name: 'Iraq (+964)', selected: false },
      { name: 'Jordan (+962)', selected: false },
      { name: 'Kazakhstan (+7)', selected: false },
      { name: 'Kenya (+254)', selected: false },
      { name: 'Libya (+218)', selected: false },
      { name: 'Liechtenstein (+423)', selected: false },
      { name: 'Luxembourg (+352)', selected: false },
      { name: 'Macau (+853)', selected: false },
      { name: 'North Macedonia (+389)', selected: false },
    ], // List of available regions with selection state
  });

  const handlePhoneRegionSelect = (selectedPhoneRegion) => {
    setPhoneRegions((prevRegions) => {
      const updatedRegions = prevRegions.availablePhoneRegions.map((region) => {
        if (region.name === selectedPhoneRegion) {
          return { ...region, selected: true };
        } else {
          return { ...region, selected: false };
        }
      });
      return { ...prevRegions, selectedPhoneRegion, availablePhoneRegions: updatedRegions };
    });
    setShowPhoneModal(false); // Close the modal after selecting a region
  };

  const handleInputClick = () => {
    setShowModal(true); // Show the modal when input is clicked
  };
  const handlePhoneInputClick = () => {
    setShowPhoneModal(true); // Show the modal when input is clicked
  };
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <form
    className=" my-4 " 
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
        <div className="row border  mx-1" style={{borderRadius:"10px"}}>
                <div className="form-group col-12 border">

        <Controller
          name="cardNumber"
          control={control}
          rules={{
            required: "Card number is required",
            pattern: {
              value: /^\d{16}$/,
              message: "Invalid card number",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              style={{padding:"0.9em",border:"none"}}
              placeholder="Card Number"
              className={`form-control shadow-none${
                errors.cardNumber ? "is-invalid" : ""
              }`}
            />
          )}
        />
        {errors.cardNumber && (
          <div className="invalid-feedback">{errors.cardNumber.message}</div>
        )}
      </div>

      <div className="form-group col-6 m-non border">
      
        <Controller
          name="cvv"
          control={control}
          rules={{
            required: "CVV is required",
            pattern: {
              value: /^\d{3}$/,
              message: "Invalid CVV",
            
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              style={{padding:"0.9em",border:"none"}}
              placeholder="CVV"
              className={`form-control shadow-none${errors.cvv ? "is-invalid" : ""}`}
            />
          )}
        />
        {errors.cvv && (
          <div className="invalid-feedback">{errors.cvv.message}</div>
        )}
      </div>

      <div className="form-group col-6 border">
      
        <Controller
          name="expiration"
          control={control}
          rules={{
            required: "Expiration date is required",
            pattern: {
              value: /^(0[1-9]|1[0-2])\/\d{2}$/,
              message: "Invalid expiration date (MM/YY)",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              style={{padding:"0.9em",border:"none"}}
              placeholder="Expiration"
              className={`form-control shadow-none ${
                errors.expiration ? "is-invalid" : ""
              }`}
            />
          )}
        />
        {errors.expiration && (
          <div className="invalid-feedback">{errors.expiration.message}</div>
        )}
      </div>

        </div>
        <div className="Haeder_Form_lovation_info my-3">
          <h6>Billing address</h6>
        </div>
        <div className="row border mx-1" style={{ borderRadius: "10px" }}>
        <div className="form-group col-12 border">
          <Controller
            name="streetAddress"
            control={control}
            rules={{
              required: "Street Address is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                style={{ padding: "0.9em", border: "none" }}
                placeholder="Street Address"
                className={`form-control shadow-none ${
                  errors.streetAddress ? "is-invalid" : ""
                }`}
              />
            )}
          />
          {errors.streetAddress && (
            <div className="invalid-feedback">
              {errors.streetAddress.message}
            </div>
          )}
        </div>

        <div className="form-group col-6 m-non border">
          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                style={{ padding: "0.9em", border: "none" }}
                placeholder="City"
                className={`form-control shadow-none${errors.city ? "is-invalid" : ""}`}
              />
            )}
          />
          {errors.city && (
            <div className="invalid-feedback">{errors.city.message}</div>
          )}
        </div>

        <div className="form-group col-6 border">
          <Controller
            name="zipCode"
            control={control}
            rules={{
              required: "ZIP Code is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                style={{ padding: "0.9em", border: "none" }}
                placeholder="ZIP Code"
                className={`form-control shadow-none${
                  errors.zipCode ? "is-invalid" : ""
                }`}
              />
            )}
          />
          {errors.zipCode && (
            <div className="invalid-feedback">{errors.zipCode.message}</div>
          )}
        </div>

        <div className="form-group col-6 m-non border">
          <Controller
            name="state"
            control={control}
            rules={{
              required: "State is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                style={{ padding: "0.9em", border: "none" }}
                placeholder="State"
                className={`form-control shadow-none${
                  errors.state ? "is-invalid" : ""
                }`}
              />
            )}
          />
          {errors.state && (
            <div className="invalid-feedback">{errors.state.message}</div>
          )}
        </div>

        <div className="form-group col-6 border">
          <Controller
            name="suiteNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                style={{ padding: "0.9em", border: "none" }}
                placeholder="Suite Number"
                className="form-control shadow-none"
              />
            )}
          />
        </div>
      </div>
      <div className="row pb-5 border-bottom mx-1 my-3" >
      <div className="form-group col-12 border" style={{ borderRadius: "10px" }}>
        <div className="mx-2"><span style={{fontSize:"13px",color:"rgba(0,0,0,0.5)"}}>Country/region</span></div>
      <div className="d-flex align-items-center justify-content-between" >
      <input
        type="text"
        style={{ padding: "0.5em", border: "none" }}
        value={regions.selectedRegion}
        onClick={handleInputClick}
        readOnly
        placeholder="Select a region"
        className="form-control shadow-none" // Apply Bootstrap classes here if needed
      />
      <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></span>
      <RegionModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSelectRegion={handleRegionSelect}
        regions={regions}
      />
    </div>
      </div>
      </div>
      <div className="row border-bottom mx-1 my-3" >
      <div><h3> Required for your trip</h3></div>
      <div className="col-12 my-3 d-flex align-items-center justify-content-between">
      <div className="message_modal">
          <h5>Message the Host</h5>
          <p>Let the Host know why you're traveling and when you'll check in.</p>
        </div>
        <div className="button_modal">
<span className="btn "style={{border:"1px solid #444"}} onClick={() => setModalShow(true)}>add</span>
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
      </div>
      <div className="col-12 my-3 d-flex align-items-center justify-content-between">
      <div className="message_modal">
          <h5>Phone number</h5>
          <p >Add and confirm your phone number to get trip updates.</p>
        </div>
        <div className="button_modal">
<span className="btn "style={{border:"1px solid #444"}} onClick={handleShow}>add</span>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h3>Add phone number</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className="container">
  <div><p>We’ll send you trip updates and a text to verify this number.</p></div>
  <div className=" my-3">
<div className="border"style={{borderRadius:"8px"}}  >
  <div onClick={handlePhoneInputClick}>
      <span style={{color:"rgba(0,0,0,0.5)",fontSize:"10px"}} className="mx-2">Country/region</span>
  <input
  type="text"
        style={{border:"none"  }}
        value={Phoneregions.selectedPhoneRegion}
        onClick={handlePhoneInputClick}
        readOnly
        placeholder="Select a region"
        className="form-control shadow-none  border-bottom" // Apply Bootstrap classes here if needed
      />
  </div>
<div>
   <input
  type="text" style={{border:"none"  }} placeholder="Phone number"  className="form-control shadow-none p-3 " 
      />
</div>
 
</div>
<p style={{fontSize:"10px"}} className="my-1 mx-auto">We'll text you a code to confirm your number. Standard message and data rates apply.</p>
  </div>
</div>

<button className="btn btn-dark m-2 px-5 py-3">Continue</button>

        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
<PhoneModal 

show={showPhoneModal}
onHide={() => setShowPhoneModal(false)}
onSelectPhoneRegion={handlePhoneRegionSelect}
regions={Phoneregions}
/>


        </div>
      </div>
    
      </div>
      <div className="row border-bottom  mx-1 my-3" >
      <div><h3> Cancellation policy</h3></div>
      <div className="col-12 my-3 d-flex align-items-center justify-content-between">
   <p style={{width:"90%",fontSize:"17px"}}><span style={{fontWeight:"bold"}}>Free cancellation before Sep 13</span>.  Cancel  before  check-in on Sep 14 for a partial refund. <a href="#" style={{fontWeight:"500"}}className="text-dark" >Learn more</a></p>
      
      </div>

    
      </div>
      <div className="row border-bottom  mx-1 my-3" >
      <div><h3>Ground rules</h3></div>
      <div className="col-12 my-3 ">
   <p style={{fontSize:"17px"}}>We ask every guest to remember a few simple things about what makes a great guest.</p>
      <div>
        <li>Follow the house rules</li>
        <li>Treat your Host’s home like your own</li>
      </div>
      </div>

    
      </div>
      <div className="row   mx-1 my-3" >
      <div><h3>Ground rules</h3></div>
      <div className="col-12 my-3 ">
   <p style={{fontSize:"13px",color:"rgbs(0,0,0,0.5)"}}>
   By selecting the button below, I agree to the <a href="#" className="text-dark bold">Host's House Rules, Ground rules for guests, Airbnb's Rebooking and Refund Policy</a>, 
    and that Airbnb can
     <a href="" className="text-dark bold">charge my payment method</a> if I’m responsible for damage. </p>
      <div className="my-5">
   <button className="btn btn__payment py-3 px-3 text-white "style={{fontWeight:"bold"}}  >Confirm and pay</button>
      </div>
      </div>

    
      </div>
     
    </form>
   
  );
};


const RegionModal = ({ show, onHide, onSelectRegion, regions }) => {
  const handleRegionSelect = (region) => {
    onSelectRegion(region.name);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Select a Region</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul style={{overflowX:"auto", height:"30em"}}>
          {regions.availableRegions.map((region) => (
            <li
              key={region.name}
              className="border-bottom d-flex align-items-center justify-content-between w-100 my-1 py-2  mx-auto"
              onClick={() => handleRegionSelect(region)}
              style={{ cursor: 'pointer',listStyle:"none" }}
            >
             {region.name} {region.selected ? <FaCheck /> : ''} 
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};
const PhoneModal = ({ show, onHide, onSelectPhoneRegion, regions }) => {
  const handlePhoneRegionSelect = (region) => {
    onSelectPhoneRegion(region.name);
  };

  return (
    <Modal  size="xl"  fullscreen="xxl-down" show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Select a Region</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul style={{overflowX:"auto", height:"30em"}} className="px-4">
          {regions.availablePhoneRegions.map((region) => (
            <li
              key={region.name}
              className="border-bottom d-flex align-items-center justify-content-between w-100 my-1 py-2  mx-auto"
              onClick={() => handlePhoneRegionSelect(region)}
              style={{ cursor: 'pointer',listStyle:"none" }}
            >
             {region.name} {region.selected ? <FaCheck /> : ''} 
            </li>
          ))}
        </ul>
       
      </Modal.Body>
       <Modal.Footer>
       <button className="btn btn-dark my-3">Continue</button>
        </Modal.Footer>
    </Modal>
  );
};
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div className="border-bottom d-flex align-items-center justify-content-between py-2">
    <span onClick={props.onHide} className="mx-3 " style={{fontSize:"18px",fontWeight:"500",cursor:"pointer"}}> X</span>
<div className=" d-flex align-items-center justify-content-between mx-2" style={{width:"60%"}}>   
   <h6 className="b" style={{fontSize:"15px",fontWeight:"500"}}>    Message the Host</h6>
   </div>
    </div>
      <Modal.Body>
      <div className="my-2 mx-3">
      <h4>Message the Host</h4>
        <p style={{fontSize:"13px"}}>
        Let the Host know why you're traveling and when you'll check in.
        </p>
      </div>
      <div className="row bg-light m-2" style={{borderRadius:"10px"}}>
          <div className="col-2  d-flex align-items-center ">
<div className=" border " style={{width:"50px",height:"50px",borderRadius:"50%"}}></div>
<img 
src="https://a0.muscache.com/im/pictures/user/acd97bc9-42f7-45cf-84d4-076add17e41a.jpg?aki_policy=profile_x_medium" 

alt=""
 className="img-flud" style={{width:"50px",height:"50px",borderRadius:"50%"}} />
          </div>
          <div className="col-10 my-2">
            <div><h5>Carmela</h5></div>
            <div><p style={{fontSize:"13px"}}>Ciao, prima di prenotare leggi attentamente le regole. Non è 
              previsto l’utilizzo della cucina, ricordo che la camera è destinata esclusivamente a chi prenota. grazie</p></div>
          </div>
      </div>
      <div className="form">
        <div className="mb-3">
          <label  className="form-label"></label>
          <textarea className="form-control py-5" name="" id="" ></textarea>
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100"><button className="btn btn-primary bold text-white w-100">Save</button></div>
      </Modal.Footer>
    </Modal>
  );
}
export default Credit;
