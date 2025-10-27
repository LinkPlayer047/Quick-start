import React from 'react'

const Navbar = () => {
    const navDialog = document.getElementById('nav-dialoge');
        function handleMenu(){
    navDialog.classList.toggle('hidden')
}
  return  (

    <div className='w-full h-20 flex items-center justify-between'>
        <nav className='p-3 flex bg-white justify-between items-center'>
            <a className='flex gap-2 items-center' href="">
                <img className='object-cover max-w-20 max-h-14' src="src\assets\Images\GMS logo.png" alt="GMS Logo" />
            </a>
        </nav>
        <div id="nav-menu" className='hidden md:hidden sm:hidden gap-20 lg:flex items-center'>
            <a href="#" className='font-medium hover:text-blue-600'>Home</a>
            <a href="#" className='font-medium hover:text-blue-600'>About us</a>
            <a href="#" className='font-medium hover:text-blue-600'>Services</a>
            <a href="#" className='font-medium hover:text-blue-600'>Privacy Policy</a>            
        </div>
        <button className='hidden md:hidden lg:flex gap-2 items-center border border-gray-300 rounded-lg px-6 py-2 m-5 hover:border-gray-800'>
            <img src="src\assets\Images\GMS logo.png" alt="GMS Logo" className='w-5 h-5' />
            <span>Contact us</span>
        </button>
        <button className='sm:flex lg:hidden items-center justify-center p-5' onClick={handleMenu}>
            <img src="src\assets\Images\menu.png" alt="menu" className='w-7 h-7' />
        </button>


    </div>
  )
}

export default Navbar