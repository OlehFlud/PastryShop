'use client';
import Image from 'next/image';

export const MainSection = () => {
  return (
    <div className={'w-full'}>
      <div className={'flex flex-col-reverse sm:flex-row gap-4 items-center justify-between w-full mt-32 mb-24'}>
        <div className={'fllex items-center text-center sm:text-left'}>
          <h1 className={'font-tan-pearl text-primary text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[85px]'}>Bliss</h1>
          <p className={'uppercase font-bold text-primary md:text-[36px] sm:text-[24px] text-[16px] mt-4 sm:mt-0'}>
            MH22C <br /> Федишин Надія
          </p>
        </div>
        <Image src="/images/logo.jpg" alt="logo" width={500} height={600} priority />
      </div>
    </div>
  );
};
