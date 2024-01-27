import React from 'react';

const Boxes = (props) => {
  return (
    <div className="card bg-black bg-gradient" style={{ width: '5rem' }}>
      <div className="card-body text-center">
        <h1 className='text-warning'>{props.img} {props.digit}</h1>
      </div>
    </div>
  );
};

export default Boxes;
