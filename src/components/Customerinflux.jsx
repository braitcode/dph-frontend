import React from 'react'

const Customerinflux = ({ users }) => {
    const width = (users / 300) * 100; 
  
    return (
      <div className="h-2 bg-gray-300 rounded-full">
        <div className={`h-2 bg-[#02864A] rounded-full transition-width duration-500`} style={{ width: `${width}%` }}></div>
      </div>
    );
  };
  
  export default Customerinflux;