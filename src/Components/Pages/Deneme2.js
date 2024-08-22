import React from 'react'
import Navbar from '../Navbar/Navbar';
import wallpaper from '../Assets/wallpaper.jpg';
import Card from './Card';
import MainEvent from './MainEvent';
import Footer from '../Footer/Footer';



const Deneme2 = () => {
  return (
    <div>
        <div>
        <Navbar/>
        <div className='bg-gradient-to-b from-russet to-lion relative flex items-center justify-center h-screen'>
            <img 
            src={wallpaper} 
            alt="page-image" 
            className='w-[170vh] h-[70vh] md:h-[60vh] lg:h-[76vh] object-cover absolute' 
            />
            <div className="absolute inset-0 flex items-center justify-start pl-36"> 
                <h1 className="text-khaki text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">A SOFA, <br/> A GOOD BOOK, <br/> AND YOU.</h1>
            </div>
        </div>
        <Card className="pb-12" />
        <MainEvent/>
        </div>
        <Footer/>
    </div>
  )
}

export default Deneme2;