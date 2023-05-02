import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="wrapper mt-8 px-0">
        <div className="flex items-end">
          <Image
            src="/images/profilephoto-hero.webp"
            width={330}
            height={300}
            quality={100}
            alt=""
          />
          <div className="mb-10 ml-24">
            <h1 className="mb-6 text-3xl font-semibold text-hightlight">
              {t('hero-heading')}
            </h1>
            <p className="w-3/5 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus.
            </p>
            <div className="mt-10 flex items-center">
              <div className="flex items-center">
                <div className="text-[44px] text-hightlight">15</div>
                <div className="ml-[14px] w-min whitespace-break-spaces text-base leading-5">
                  {t('years-experience')}
                </div>
              </div>
              <div className="ml-14 flex items-center">
                <div className="text-[44px] text-hightlight">20</div>
                <div className="ml-[14px] w-min whitespace-break-spaces text-base leading-5">
                  {t('finished-projects')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
