'use client';
import Image from 'next/image';

export const OurInteriorSection = () => {
  return (
    <div className={'w-full'}>
      <div className={'flex flex-col gap-4 sm:mt-52 mb-24'}>
        <h1
          className={
            'font-tan-pearl text-main text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[85px] mt-10'
          }
        >
          Our Interior
        </h1>
        <div className="grid grid-cols-1 sm:grid-rows-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image src="/images/interior_1.png" className={'h-[200px] w-full'} alt="logo" width={800} height={400} />
            <Image src="/images/interior_2.png" className={'h-[200px] w-full'} alt="logo" width={800} height={400} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image src="/images/interior_3.png" className={'h-[200px] w-full'} alt="logo" width={200} height={200} />
            <Image src="/images/interior_4.png" className={'h-[200px] w-full'} alt="logo" width={200} height={200} />
            <Image src="/images/interior_5.png" className={'h-[200px] w-full'} alt="logo" width={200} height={200} />
          </div>
        </div>
        <p className={'text-left text-main md:text-[24px] sm:text-[20px] text-[16px] mt-10'}>
          Наш інтер'єр має стильний дизайн, виконаний у пастельних кольорах, переважно зеленому та рожевому. Овальні
          стільці та круглі столики будуть надавати м'якості й затишку. Стіни пофарбовані в м'ятно-зелений колір, а
          акценти наприклад світильники з абажурами надаватимуть ретро-нотку. На стінах яскраві елементи декору, такі як
          неонові написи і різні таблички що створює веселий настрій. Особливою деталлю буде використання терраццо чи
          мармуму на підлозі та барній стійці. Барна стійка матиме округлі форми та зручні барні стільця. Загалом, це
          простір, де поєднано естетику ретро-кафе з сучасними акцентами.
        </p>
      </div>
    </div>
  );
};
