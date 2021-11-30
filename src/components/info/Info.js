import React from 'react';
import './info.css';

const Info = ({data, deleteStd, index}) => {


  return (
    <div className="info">
        <h3>{data.name} {index}</h3>
        <p>
            {data.age}, 
            {data.city}
        </p>
        <button onClick={()=>deleteStd(index)}>Delete</button>
    </div>
    );
  }

  export default Info;