import React from 'react';
import './Step.scss'
const Step = ({ number, title, children }) => {
  return (
    <div className='StepContainer'>
        <div className='Number'>
            <p>BƯỚC {number}</p>
        </div>
        <div className='Content'>
            <p className='Title'>
                {title}
            </p>
            <div className='ListContent'>
                {children}
            </div>
        </div>

    </div>
  );
};
  
  export default Step;