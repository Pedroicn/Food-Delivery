import React from 'react';
import data from '../data/data';

const Food = () => {
  return (
    <main className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-700 font-bold text-4xl text-center'>Melhor avaliados</h1>
      <div className='flex flex-col lg:flex-row justify-between'>

        <div>
          <p className='font-bold text-gray-700'>Filtrar</p>
          <div className='flex justify-around flex-wrap'>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Todos</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Hambuguer</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Pizza</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Salada</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Frango</button>
          </div>
        </div>

        <div>
          <p className='font-bold text-gray-700'>Filtrar por preço</p>
          <div className='flex justify-around max-w-[390px] w-full'>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>$</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>$$</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>$$$</button>
            <button className='m-1 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>$$$$</button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Food;
