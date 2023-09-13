import React, { useState } from 'react';
import './Messages.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


const Messages = () => {
    const [borderStyle, setBorderStyle] = useState('none');
    const [rightVisible, setRightVisible] = useState(true); // State variable to control visibility
  
    const handleToggleBorder = (style) => {
      setBorderStyle(style);
    };
  
    const handleToggleRight = () => {
      setRightVisible(!rightVisible);
    };

  return (
    <div>
      <div className="aaaaa" style={{ position: 'relative', top: '-48px' }}>
        <div className="d-flex box">

          <div className={`left w-25 ${borderStyle === 'left' ? 'border_bold' : '' }` } >
            <div
              className="head d-flex align-items-center justify-content-between border-bottom"
              style={{ height: '80px' }}
            >
              <h6 className="fw-bold mx-2">Messages</h6>

            </div>
            <div
              className={`my-4 h-75`}
              onClick={() => handleToggleBorder('left')}
            >
                <div className=' d-flex align-items-center justify-content-center flex-column'>
                           <h6 className="fw-bold">You have no unread messages</h6>
              <p className="text-secondary m">
                When you book a trip or experience,
                <span> messages from your host will show up here.</span>
              </p> 
              <Link to="/">
 <button className="btn btn-outline-light border py-2 px-3 text-dark">
               Explore Airbnb
              </button>
              </Link>
             
                </div>
       
            </div>
          </div>

          <div className={`middel w-50 ${borderStyle === 'middle' ? 'border_bold' : ''}`}>
            <div
              className={`head border-bottom `}
              style={{ height: '80px' }}
              
            >

            </div>
            <div className="h-75" onClick={() => handleToggleBorder('middle')}>

</div>
          </div>

          <div className={`right w-25 ${ borderStyle === 'right' ? 'border_bold' : '' }`}  >
            <div 
              className={`head border-bottom d-flex align-items-center justify-content-between `}
              style={{ height: '80px' }}
             
            >
              <h6 className="fw-bold mx-3">details</h6>
              <span className="Close_btn" onClick={() => handleToggleRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '20px',
                    width: '20px',
                    stroke: 'currentcolor',
                    strokeWidth: 3,
                    overflow: 'visible',
                  }}
                >
                  <path d="m6 6 20 20M26 6 6 26"></path>
                </svg>
              </span>
            </div>
            <div className="h-75" onClick={() => handleToggleBorder('right')}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

