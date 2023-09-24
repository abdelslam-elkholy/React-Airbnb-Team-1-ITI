import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RegionModal = ({ onSelectRegion, regions }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegionSelect = (region) => {
    onSelectRegion(region);
    handleClose();
  };

  return (
    <>
      <input
        type="text"
        value={regions.selectedRegion}
        onClick={handleShow}
        readOnly
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Region</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {regions.availableRegions.map((region) => (
              <li
                key={region}
                onClick={() => handleRegionSelect(region)}
                style={{ cursor: 'pointer' }}
              >
                {region}
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegionModal;
