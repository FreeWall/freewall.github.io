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
    languages?.reduce((partialSum, a) => partialSum + a.hours, 0) ?? 1;

  return (
    <>
      <div className="wrapper mt-8 pl-0">
        <div className="flex items-end">
          <Image
            src="/images/profilephoto-hero.webp"
            width={300}
            height={300}
            alt={author.fullname}
          />
          <div className="mb-10 ml-20 flex-1">
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
          {!!languages?.length && (
            <div className="mb-12">
              <div className="mb-2 text-right text-xl font-semibold text-hightlight">
                {new Date().getFullYear()}
              </div>
              <div className="ml-auto w-[200px] space-y-1.5">
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
                    <div className="relative h-[5px] w-full rounded-sm bg-secondary">
                      <div
                        className="absolute h-[5px] rounded-[3px]"
                        style={{
                          width:
                            Math.max(
                              (language.hours * 100) / languagesHoursSum < 10
                                ? ((language.hours * 100) / languagesHoursSum) *
                                    2
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
    </>
  );
}
