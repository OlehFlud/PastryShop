'use client';
import Image from 'next/image';

export const OurProductSection = () => {
  return (
    <div className={'w-full'}>
      <div className={'flex flex-col gap-4 sm:mt-32 mb-24'}>
        <div className={'flex flex-col gap-4 sm:mt-32'}>
          <h1
            className={
              'font-tan-pearl text-main text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[85px] sm:mt-10'
            }
          >
            Our Product
          </h1>
          <p
            className={'font-normal text-main  ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-4 sm:mt-10'}
          >
            Меню буде поєднувати традиційні англійські десерти з класичними напоями,створюючи атмосферу минулого
            століття. В меню буде великий різновид десертів,закусок, сніданків та легких салатів. Кава, чай, молочні
            коктейлі, лимонади і звісно традиційний англійський сидр
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10">
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/product_1.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-main text-[24px] mt-10'}>Banoffee Pie</p>
          </div>

          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/product_2.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-main text-[24px] mt-10'}>Tea</p>
          </div>

          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/product_3.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-main text-[24px] mt-10'}>Victoria Sponge Cake</p>
          </div>
        </div>
      </div>
    </div>
  );
};
