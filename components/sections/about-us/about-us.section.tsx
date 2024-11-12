'use client';

import Image from 'next/image';

export const AboutUsSection = () => {
  return (
    <div className={'w-full'}>
      <div className={'flex flex-col sm:flex-row gap-4 items-end w-full mt-32 mb-24'}>
        <div className={'fllex flex-col items-end w-full sm:w-[60%] gap-10'}>
          <Image
            src="/images/about_1.png"
            className={'h-[300px] w-[800px]'}
            alt="logo"
            width={600}
            height={300}
            priority
          />
          <div className={'flex flex-col mt-10'}>
            <h1
              className={
                'font-tan-pearl text-main text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[85px]'
              }
            >
              About Us
            </h1>
            <p className={'font-bold text-main md:text-[24px] sm:text-[20px] text-[16px] my-4 sm:my-0'}>
              Кафе-кондитерської, заснованої на ретро кав'ярнях Англії- це місце, де завжди можна знайти свіжі десерти,
              випічку та різноманітні напої. Відвідувачам пропонують великий вибір тістечок, еклерів, тортів і
              макаронів, приготованих із високоякісних інгредієнтів. У меню також є легкі закуски та кавові напої,
              створені для того, щоб доповнити смак солодощів. Тут можна як насолодитися швидким перекусом, так і взяти
              замовлення з собою.
            </p>
          </div>
        </div>
        <Image
          src="/images/about_2.png"
          className={'h-[300px] w-[500px]'}
          alt="logo"
          width={300}
          height={200}
          priority
        />
      </div>
    </div>
  );
};
