import React from 'react';
import { Link } from 'react-router-dom';
import './info.css';

const Info = ({data, deleteStd, index}) => {


  return (
    
      <div className="info">
        <Link to="/edit-student" state={{student: data, index}}>
          <h3>{data.name}</h3>
        </Link>
        <p>
            {data.age}, 
            {data.city}
        </p>
        <button onClick={(e)=>deleteStd(e,index)}>Delete</button>
      </div>
    
    );
  }

  export default Info;