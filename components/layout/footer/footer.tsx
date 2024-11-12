import { IoLocationOutline } from 'react-icons/io5';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

export const Footer = () => {
  return (
    <footer>
      <div className={'w-full mr-0 bg-[#543828] relative p-10'}>
        <div className={'flex flex-col sm:flex-row justify-between items-center w-full'}>
          <h1
            className={
              'z-10 font-tan-pearl font-normal text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] ml-8'
            }
          >
            Contact Us
          </h1>
          <ul className={'z-10 flex flex-col sm:flex-row m-8 gap-8 text-white'}>
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
        </div>
      </div>
    </footer>
  );
};
