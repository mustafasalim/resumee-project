import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import PersonelInformations from './personalinformations';
import InterestAll from './interest/InterestAll';

const steps = [
  {
    title: 'Personel Informations',
    content: <PersonelInformations/>,
  },
  {
    title: 'Areas of interest',
    content: <InterestAll/>,
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const CreatedCv: React.FC = () => {

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));



  return (
<div className="w-full h-screen flex items-center justify-center font-['Rounded Mplus 1c']">
<div className='w-[1400px]'>
<Steps className='font-bold' current={current} items={items} />
      <div className='border rounded-md mt-5'>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button   htmlType="submit" className='bg-[#1677FF] font-bold' type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button className='bg-[#1677FF] font-bold' type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button className='font-bold' style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
</div>
</div>
  );
};

export default CreatedCv;



