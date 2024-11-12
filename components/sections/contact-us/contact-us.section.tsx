'use client';

import Image from 'next/image';

import { IoLocationOutline } from 'react-icons/io5';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

export const ContactUsSection = () => {
  return (
    <div className={'w-full mr-0 bg-[#5B4D46] mt-32 relative'}>
      <div className={'flex flex-col mt-8 ml-8'}>
        <h4 className={'font-normal text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] underline'}>
          Pastry Shop
        </h4>
      </div>
      <div className={'flex flex-col mt-8'}>
        <h1
          className={
            'z-10 font-tan-pearl font-normal text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] ml-8'
          }
        >
          Contact Us
        </h1>
        <ul className={'z-10 flex flex-col m-8 gap-4 text-white'}>
          <div className={'flex flex-row items-center'}>
            <div className={'bg-white rounded-full p-2 w-fit mr-2'}>
              <FaPhone color={'#5B4D46'} />
            </div>
            <p>+123-456-7890</p>
          </div>
          <div className={'flex flex-row items-center'}>
            <div className={'bg-white rounded-full p-2 w-fit mr-2'}>
              <FaEnvelope color={'#5B4D46'} />
            </div>
            <p>psbliss@reallygreatsite.com</p>
          </div>
          <div className={'flex flex-row items-center'}>
            <div className={'bg-white rounded-full p-2 w-fit mr-2'}>
              <TbWorld color={'#5B4D46'} />
            </div>
            <p>pastryshopbllis.com</p>
          </div>
          <div className={'flex flex-row items-center'}>
            <div className={'bg-white rounded-full p-2 w-fit mr-2'}>
              <IoLocationOutline color={'#5B4D46'} />
            </div>
            <p>LVIV</p>
          </div>
        </ul>
        <Image
          src="/images/contact.png"
          className={'z-0 h-[320px] w-[600px] absolute bottom-0 right-0'}
          alt="contact"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};
