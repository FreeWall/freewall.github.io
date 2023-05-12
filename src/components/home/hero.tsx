import { useApp } from '@/contexts/app';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';

export default function Hero() {
  const { t } = useTranslation('common');
  const { author } = useApp();

  return (
    <>
      <div className="wrapper mt-8 px-0">
        <div className="flex items-end">
          <Image
            src="/images/profilephoto-hero.webp"
            width={300}
            height={300}
            alt={author.fullname}
          />
          <div className="mb-10 ml-20">
            <h1 className="mb-6 text-3xl font-semibold text-hightlight">
              {t('hero-heading')}
            </h1>
            <p
              className="text-base"
              dangerouslySetInnerHTML={{ __html: t('hero-text') }}
            />
            <div className="mt-8 flex items-center">
              <div className="flex items-center">
                <div className="text-[44px] font-medium text-hightlight">
                  15
                </div>
                <div className="ml-[14px] w-min whitespace-break-spaces text-base leading-5">
                  {t('years-experience')}
                </div>
              </div>
              <div className="ml-14 flex items-center">
                <div className="text-[44px] font-medium text-hightlight">
                  20
                </div>
                <div className="ml-[14px] w-min whitespace-break-spaces text-base leading-5">
                  {t('finished-projects')}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 ml-10">
            <div className="text-xl font-semibold leading-none text-hightlight">
              {t('typing-in-heading')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
