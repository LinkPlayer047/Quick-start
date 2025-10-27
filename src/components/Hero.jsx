import React from 'react'

const Hero = () => {
  return (
    <div >
        <div id="hero" className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
            <div id="hero-container" className='max-w-4xl mx-auto px-6 pb-32 pt-6 flex flex-col sm:text-center sm:items-center'>
                <div id="version-text" className='flex items-center my-6 gap-2 rounded-lg border border-yellow-400 bg-yellow-50 px-5 py-2 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition'>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                        <p className='text-yellow-400 text-medium'>v0.1.2 <span className='text text-yellow-700'>find in page bugs fixs</span></p>
                    
                </div>
                <h1 className='text-4xl font-semibold leading-snug mt-6 sm:text-6xl sm:leading-normal'>Web app to Desktop app in minutes</h1>
                <p className='text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                <div id="button-container" className='mt-12 flex gap-4 flex-col md:flex-row lg:flex-row'>
                    <button className='px-3 py-3 font-semibold rounded-lg text-white bg-blue-800 hover:bg-blue-600'>Download Now</button>
                    <button className='px-3 py-3 font-semibold rounded-lg text-black bg-white border border-gray-400 hover:border-gray-950'>Read Docs</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero