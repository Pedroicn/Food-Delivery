import React from 'react';
import { categories } from '../data/data';

const Category = () => {
  return (
    <section className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-orange-700 font-bold text-4xl text-center'>Categorias</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 py-8 gap-6'>
        {
          categories?.map((categorie) => (
            <div key={ categorie.id } className='bg-gray-100 rounded-lg flex flex-col justify-between items-center' >
                <h2 className='font-bold sm:text-xl'>{ categorie.name }</h2>
                <img className='w-20' src={ categorie.image } alt={ categorie.name } />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Category;
