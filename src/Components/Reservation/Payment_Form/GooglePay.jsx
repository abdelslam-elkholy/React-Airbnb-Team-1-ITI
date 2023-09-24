
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { FaCheck } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

const GooglePay = () => {

  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const handlePhoneInputClick = () => {
    setShowPhoneModal(true); // Show the modal when input is clicked
  };


  return (
    <div>
    <div className="row border-bottom mx-1 mt-5 my-3 border-top" >
      <div className='mt-3'><h3> Required for your trip</h3></div>
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
   <button className="btn btn-dark py-3  text-white "style={{fontWeight:"bold",width:"200px"}}  >  
   <img src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" alt="" />
   
   </button>
      </div>
      </div>

    
      </div>
     
  
    </div>
  )
}
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
export default GooglePay
