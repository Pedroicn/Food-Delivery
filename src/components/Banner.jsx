import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[600px] relative'>

        <div className='absolute w-full h-full max-h-[600px] text-white bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>O seu <span className='text-orange-700'>melhor</span> </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>App <span className='text-orange-700'>delivery</span> </h1>
        </div>
        <img className='w-full max-h-[600px] object-cover' src="https://images.unsplash.com/photo-1594179047519-f347310d3322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
    </div>
  )
}

export default Banner;
