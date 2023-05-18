import { useApp } from '@/contexts/app';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';

const languageColor: Record<string, string> = {
  PHP: '#8b90d1',
  JavaScript: '#efd81d',
  TypeScript: '#388ae4',
  Java: '#e51f24',
  GraphQL: '#f6009c',
  CSS: '#dd4b25',
};

export default function Hero() {
  const { t } = useTranslation('common');
  const { author, languages } = useApp();

  const languagesHoursSum =
    languages?.reduce(
      (partialSum, language) => partialSum + language.hours,
      0,
    ) ?? 1;

  return (
    <div className="md:wrapper md:mt-8 md:pl-0">
      <div className="items-end md:flex">
        <Image
          className="hidden md:block"
          src="/images/profilephoto-hero.webp"
          width={300}
          height={273}
          alt={author.fullname}
        />
        <div className="mb-8 flex-1 px-7 md:mb-10 md:ml-20 md:bg-transparent md:px-0">
          <h1 className="mb-4 text-2xl font-semibold text-hightlight md:mb-6 md:text-3xl">
            {t('hero-heading')}
          </h1>
          <p
            className="text-base"
            dangerouslySetInnerHTML={{ __html: t('hero-text') }}
          />
          <div className="mt-5 flex items-center justify-between md:mt-8 md:justify-normal">
            <div className="flex items-center">
              <div className="text-[36px] font-medium text-hightlight md:text-[44px]">
                15
              </div>
              <div className="ml-[11px] w-min whitespace-break-spaces text-xs leading-4 md:ml-[14px] md:text-base md:leading-5">
                {t('years-experience')}
              </div>
            </div>
            <div className="flex items-center md:ml-11">
              <div className="text-[36px] font-medium text-hightlight md:text-[44px]">
                20
              </div>
              <div className="ml-[11px] w-min whitespace-break-spaces text-xs leading-4 md:ml-[14px] md:text-base md:leading-5">
                {t('finished-projects')}
              </div>
            </div>
          </div>
        </div>
        {!!languages?.length && (
          <div className="mb-8 px-7 md:mb-12 md:px-0">
            <div className="mb-3 text-xl font-semibold text-hightlight md:mb-2.5 md:text-right">
              {new Date().getFullYear()}
            </div>
            <div className="ml-auto space-y-1.5 md:w-[200px]">
              {languages?.map((language, idx) => (
                <div key={idx}>
                  <div className="mb-0.5 flex items-center justify-between font-medium">
                    <div className="text-base text-hightlight">
                      {language.name}
                    </div>
                    <div className="text-sm">
                      {language.hours > 0
                        ? language.hours + ' ' + t('hrs')
                        : language.minutes + ' ' + t('mins')}
                    </div>
                  </div>
                  <div className="relative h-[5px] w-full overflow-x-hidden rounded-sm bg-secondary">
                    <div
                      className="absolute h-[5px] -translate-x-full animate-progress rounded-[3px]"
                      style={{
                        width:
                          Math.max(
                            (language.hours * 100) / languagesHoursSum < 10
                              ? ((language.hours * 100) / languagesHoursSum) * 2
                              : (language.hours * 100) / languagesHoursSum,
                            5,
                          ) + '%',
                        background: languageColor[language.name] ?? '#bbbbbb',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
