'use client';
import Image from 'next/image';

export const PromotionSection = () => {
  return (
    <div className={'w-full'}>
      <div className={'flex flex-col sm:mt-32 mb-24'}>
        <div className={'flex flex-col sm:mt-28'}>
          <Image src="/images/team-cut.png" className={'h-[200px] w-full'} alt="logo" width={999} height={200} />
        </div>
        <div className={'flex flex-col gap-3 mt-10'}>
          <div className={'grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10'}>
            <div className={'flex flex-col gap-3 sm:border-r-[2px] border-main'}>
              <div className={'flex flex-col gap-3'}>
                <h4 className={'font-bold'}>Акції та спеціальні пропозиції</h4>
                <ul className={'text-normal text-main text-[16px] '}>
                  <li>
                    - "Чай о п'ятій" зі знижкою: Щодня з 17:00 до 19:00 пропонувати знижки на чайний набір
                    (чайздесертом)
                  </li>
                  <li>
                    - "Британська середа": Щосереди організовуват дні,присвячені класичним британським десертам із
                    знижками на обрані страви
                  </li>
                  <li>- Безкоштовне пригощання в День народження</li>
                </ul>
              </div>
            </div>
            <div className={'flex flex-col gap-3 sm:ml-4'}>
              <h4 className={'font-bold'}>Програма лояльності</h4>
              <ul className={'text-normal text-main text-[16px]'}>
                <li>
                  - "Чайна карта": Гості отримують спеціальну картку, на якій збирають печатки за кожну покупку чаю або
                  кави. Після 10 покупок клієнт отримує безкоштовний чай десерт.
                </li>
                <li>
                  - Ексклюзивні заходи для постійних клієнтів: Регулярно проводити закриті дегустації нових десертів
                </li>
                <li>
                  - Персональні пропозиції: Надсилати персональні знижки чи бонуси постійним клієнтам на основі їх
                  улюблених замовлень.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
