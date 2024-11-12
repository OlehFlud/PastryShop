'use client';
import Image from 'next/image';

export const OurTeamSection = () => {
  return (
    //ml-[-3.5rem] lg:ml-[-9rem] xl:ml-[-13rem]
    <div className={'w-full mr-0 bg-[#5B4D46] sm:mt-32 mb-24'}>
      <div className={'flex flex-col m-8'}>
        <h1
          className={
            'font-tan-pearl font-normal text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-center sm:text-left'
          }
        >
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-10">
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_1.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Шеф кондитер
            </p>
          </div>

          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_2.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Бариста
            </p>
          </div>

          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_3.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Офіціанти
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_4.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Хостес
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_5.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Кондитерський асистент
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_6.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Клінінговий персонал
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_7.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Маркетолог
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <Image
              src="/images/team_8.png"
              className={'h-[200px] w-[200px] rounded-full'}
              alt="logo"
              width={200}
              height={200}
            />
            <p className={'text-bold text-white ld:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
              Менеджер закладу
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
