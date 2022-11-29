import React, { useState } from 'react';
import { GiHamburgerMenu, GiWallet } from 'react-icons/gi';
import { AiOutlineSearch, AiOutlineClose, AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaUserFriends } from 'react-icons/fa';
import { IoTicket } from 'react-icons/io5'

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className='max-w-[1640px] mx-auto flex justify-between items-center p-3'>

      <div className='flex items-center'>
        <div onClick={ () => setSidebar(!sidebar) } className='cursor-pointer'>
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

      {
        sidebar ? <div className='bg-black/80 fixed w-full h-screen top-0 left-0' /> : null
      }
      

      <aside className={ sidebar ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose onClick={ () => setSidebar(!sidebar) } size={30} className='absolute cursor-pointer right-4 top-4'/>
        <h2 className='text-2xl p-4'>Food <span className='font-bold'>Delivery</span> </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex px-4 py-4 text-xl'><TbTruckDelivery size={20} className='mr-4'/> Pedidos</li>
            <li className='flex px-4 py-4 text-xl'><GiWallet size={20} className='mr-4' /> Carteira</li>
            <li className='flex px-4 py-4 text-xl'><AiFillHeart size={20} className='mr-4' /> Favoritos</li>
            <li className='flex px-4 py-4 text-xl'><IoMdHelpCircle size={20} className='mr-4' /> Ajuda</li>
            <li className='flex px-4 py-4 text-xl'><IoTicket size={20} className='mr-4' /> Promoções</li>
            <li className='flex px-4 py-4 text-xl'><BsFillArrowUpSquareFill size={20} className='mr-4' /> O melhor</li>
            <li className='flex px-4 py-4 text-xl'><FaUserFriends size={20} className='mr-4' /> Convide amigos</li>
          </ul>
        </nav>
      </aside>

    </header>
  )
}

export default Header;
