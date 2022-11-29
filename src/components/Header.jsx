import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
const Header = () => {
  return (
    <header className='max-w-[1640px] mx-auto flex justify-between items-center p-3'>

      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <GiHamburgerMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Food <span className='font-bold'>Delivery</span> 
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Entrega</p>
          <p className='p-2'>Buscar</p>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={30} />
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Pesquisar' />
      </div>
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Carrinho
      </button>
    </header>
  )
}

export default Header;
