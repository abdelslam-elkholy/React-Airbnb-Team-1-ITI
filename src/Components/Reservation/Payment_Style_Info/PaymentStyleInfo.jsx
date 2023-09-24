import React from "react";
import "./PaymentStyleInfo..css";

import Overlay from "react-bootstrap/Overlay";
import { useState, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const PaymentStyleInfo = () => {

  const [showMonyModal, setShowMonyModal] = useState(false);

  const [Monyregions, setMonyRegions] = useState({
    selectedMonyRegion: '(Eg)', // Default selected region
    CurrencyMony: 'ُEG', // Default selected region
    availableMonyRegions: [
      { name: '(Eg)',currency:"ُEG" ,selected: true },
      { name: '(ElS)', currency:"$E" ,selected: false },
      { name: '(Usa)', currency:"$" ,selected: false },
      { name: '(EqG)',currency:"$Q" , selected: false },
      { name: '(Er)',currency:"$R" , selected: false },
      { name: '(Est)',currency:"$s" , selected: false },
      { name: '(Esw)', currency:"$Es" ,selected: false },
      { name: '(Eth)', currency:"$ET" ,selected: false },
      { name: '(Fra)',currency:"$Fr" , selected: false },
      { name: '(Iraq)',currency:"$Ir" , selected: false },
      { name: '(Jor)',currency:"$Jo" , selected: false },
      { name: '(Kaz)',currency:"$Ka" , selected: false },
      { name: '(Ken)',currency:"$Ken" , selected: false },
      { name: '(Lib8)',currency:"$Lib" , selected: false },
      { name: '(Lie)',currency:"$Lie" , selected: false },
      { name: '(Lux)',currency:"$Lux" , selected: false },
      { name: '(Mac)', currency:"$Ma" ,selected: false },
      { name: '(Nor)',currency:"$NMa" , selected: false },
    ], // List of available regions with selection state
  });
  ///////////

console.log(Monyregions);

//////////////

  const handleMonyRegionSelect = (selectedMonyRegion,CurrencyMony) => {
    setMonyRegions((prevRegions) => {
      const updatedRegions = prevRegions.availableMonyRegions.map((region) => {
        if (region.name === selectedMonyRegion && region.currency === CurrencyMony ) {
          return { ...region, selected: true };
        } else {
          return { ...region, selected: false };
        }
      });
      return { ...prevRegions, selectedMonyRegion,CurrencyMony, availableMonyRegions: updatedRegions };
    });
    setShowMonyModal(false); // Close the modal after selecting a region
  };
  const handleMonyInputClick = () => {
    setShowMonyModal(true); // Show the modal when input is clicked
  };
  console.log();
  return (
    <div className="border container-fluid" style={{ borderRadius: "15px" }}>
      <div className="row">
        <div
          className="col-12 d-flex my-4 mx-auto  align-item-center border-bottom pb-3"
          style={{ width: "95%", height: "30%" }}
        >
          <div className=" col-4 place_image d-flex align items-center m-2 pay__raduis  h-100">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?aki_policy=large"
              alt=""
              className="img_fluid "
            />
          </div>
          <div className="col-8 place_info d-flex align items-center justify-content-between m-2 flex-column ">
            <div className="top_info ">
              <span style={{ color: "rgba(0,0,0,0.5)" }}>Rome in condo</span>
              <p className="my-2" style={{ fontSize: "20px" }}>
                Noble room into the historical Torino
              </p>
            </div>
            <div className="rate_info my-2">
              <div className="d-flex justify-content-between">
                <span style={{ color: "#000" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>{" "}
                  4.88{" "}
                  <span style={{ color: "rgba(0,0,0,0.5)" }}>(34 reviews)</span>{" "}
                </span>
                <span>
                  <span
                    className="d-flex align-item-center w-50 "
                    style={{ color: "rgba(0,0,0,0.5)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: " block",
                        height: "12px",
                        width: "12px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                    </svg>
                    Superhost
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom d-flex align items-center justify-content-between mx-auto flex-column"
          style={{ width: "90%" }}
        >
          <div className="head m-2">
            <h2>Price details</h2>
          </div>
          <div className="nights_number d-flex align items-center justify-content-between m-2">
            <span>$41.82 x 5 nights</span>
            <span>$209.10</span>
          </div>
          <div className="cleaning d-flex align items-center justify-content-between m-2">
            <span>Cleaning fee</span>
            <span>$209.10</span>
          </div>
          <div className="Airbnb service fee d-flex align items-center justify-content-between m-2">
            <span>Airbnb service fee</span>
            <span>$209.10</span>
          </div>
          <div className="Taxes d-flex align items-center justify-content-between m-2">
            <span>Taxes</span>
            <span>$209.10</span>
          </div>
        </div>
        <div
          className="col-12 d-flex align items-center justify-content-between mx-auto flex-column"
          style={{ width: "90%" }}
        >
          <div className="total_price d-flex align items-center justify-content-between my-3 m-2">
            <h5 className="text-dark">Totals .
              
               <a href="#" onClick={handleMonyInputClick}>{Monyregions.selectedMonyRegion}</a>
                 
                 </h5>
            <h4 style={{fontSize: "18px" }}>
              <span>{Monyregions.CurrencyMony}</span>321.71
            </h4>
          </div>
          <MonyModal
        show={showMonyModal}
        onHide={() => setShowMonyModal(false)}
        onSelectMonyRegion={handleMonyRegionSelect}
        regions={Monyregions}
      />
         
        </div>
      </div>
    </div>
  );
};
const MonyModal = ({ show, onHide, onSelectMonyRegion,onSelectMonycurrency, regions }) => {
  const handleMonyRegionSelect = (region) => {
    onSelectMonyRegion(region.name);
    onSelectMonycurrency(region.currency);

  };

  return (
    <Modal  size="lg"  fullscreen="xxl-down" show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Select a Region</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul style={{overflowX:"auto", height:"30em"}} className="px-4">
          {regions.availableMonyRegions.map((region) => {
            
            return(
        
            <li
              key={region.name}
              className="border-bottom d-flex align-items-center justify-content-between w-100 my-1 py-2  mx-auto"
              onClick={() => handleMonyRegionSelect(region)}
         
              style={{ cursor: 'pointer',listStyle:"none" ,fontSize:"15px"}}
            >
             {region.name+' $'}{region.currency} {region.selected ? <FaCheck /> : ''} 
            </li>
             
          )})}
        </ul>
       
      </Modal.Body>
       <Modal.Footer>
       <button className="btn btn-dark my-3">Continue</button>
        </Modal.Footer>
    </Modal>
  );
};
export default PaymentStyleInfo;

