import React from 'react';
const logo = require('../../../public/images/logo.png')

const Navbar = () => {
  return (
    <div className='bg-red-600 w-full h-[100px] p-auto'>
         <div>
      <ul className='pl-5  absolute text-[16px]  top-0 right-0 flex  items center rounded-bl-[42px] rounded-br-[42px] bg-red-900 text-white gap-5 mr-5'>
        <li className='py-3'><a>About</a></li>
        <li className='px-3 py-3'><a>Contact</a></li>
        <li className='bg-black w-full px-5 py-3 rounded-br-[42px]'>
        <i class="fa-regular fa-calendar" ></i>
          <a className='pl-2'>
          Book A Valuationt
          </a></li>
      </ul>
     </div>

      <div className='flex justify-around items-end pt-[70px] px-5 text-[11px] '>
     <div>
       <img src={logo}/>
     </div>
     <div>
      <ul className='text-white flex gap-5'>
        <li><a>Sales</a></li>
        <li><a>Lettings</a></li>
        <li><a>Commercial</a></li>
        <li><a>New Homes</a></li>
        <li><a>Telecoms</a></li>
        <li><a>Rural</a></li>
        <li><a>Renewables</a></li>
        <li><a>Mortgages</a></li>
      </ul>
     </div>
     </div>
  
    
    </div>
  )
}

export default Navbar
