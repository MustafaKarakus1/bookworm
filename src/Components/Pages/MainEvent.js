import React from 'react';
import Martin from '../Assets/martin.jpg';
import { Button } from 'antd';
const MainEvent = () => {
  return (
    <div id="event-section" className='bg-gradient-to-b from-reseda-green to-raw-umber'>
    <h1 className="text-2xl font-bold text-left pt-4 flex items-center justify-center">Coming Up</h1>
    <h1 className="text-5xl font-bold text-left flex items-center justify-center">Book Launch</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white">
    <div className="relative flex flex-col gap-y-4 items-center justify-center w-full aspect-square p-4">
      <h2 className="text-3xl font-bold text-left">International Virtual Events</h2>
        <span className='text-2xl text-left '>
            By George R. R. Martin
        </span>
      <h3 className='underline'> Time  </h3>
        <span>31 May, 19.00</span>
      <h4 className='underline'> Place </h4>
        <span>Online Meeting</span>

    <Button className='bg-lion'>Join Now!</Button>
    </div>
    <div className="relative flex items-center justify-center w-full aspect-square p-12">
      <img src={Martin} alt="Resim 1" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
    </div>
  </div>
  </div>
  )
}

export default MainEvent