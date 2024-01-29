import React from "react";
import ReactDOM from "react-dom";
import Boxes from "./component/Boxes.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import "../styles/index.css";

const SimpleCounter = ({ counter }) => {
    const digits = counter
      .toString()
      .padStart(6, '0') // Asegura que haya al menos 6 dígitos
  
    return (
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
        <div className="col-1 mx-1">
                    <Boxes img={<FontAwesomeIcon icon={faClock} size="l" style={{ color: "#e10e0e" }} />} />
                </div>
          {digits.split('').map((digit, index) => (
            <div key={index} className="col-1 mx-1">
              <Boxes digit={parseInt(digit)} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  let counter = 0;
  setInterval(function () {
    const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
  
    counter++;
  
    // render your react application
    ReactDOM.render(<SimpleCounter counter={counter} />, document.querySelector("#app"));
  }, 1000);

