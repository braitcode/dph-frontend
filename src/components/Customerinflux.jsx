import React,{useEffect,useState} from 'react'

const Customerinflux = ({ users }) => {
  // const [flowAnimation, setFlowAnimation] = useState(0);

  // useEffect(() => {
  //   setFlowAnimation(Math.min((users / 250) * 100, 100));
  // }, [users]);
  const flowAnimation = Math.min((users / 250) * 100, 100);
  const count = Math.min(users, 230);
    return (
      <div
      className={`animate-flow ${flowAnimation === 92 ? 'animate-flow-complete' : ''}`}
      style={{ '--flow-animation': `${flowAnimation}%` }}
    >
           

      {/* your flow animation content here */}
      <div className="h-1 md:h-2 bg-gray-300 rounded-sm mb-3 md:mb-0">
        <div className={`h-1  md:h-2 bg-[#02864A] rounded-sm transition-width duration-500`} style={{ width: `${flowAnimation}%` }}></div>
      </div>
    </div>
      
    );
  };
  
  export default Customerinflux;