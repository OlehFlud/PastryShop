'use client';

import { League_Spartan } from 'next/font/google';


export const Header = () => {
  return <header className={'h-[50px] w-100'}>
    <div className={'w-full mr-0 bg-[#543828] relative px-20 py-10'}>
      <h4 className={'text-center sm:text-left text-white text-[28px]'}>Pastry Shop</h4>
    </div>
  </header>;
};
