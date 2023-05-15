import { useLocaleRedirect } from '@/hooks/useLocaleRedirect';
import { useTranslation } from 'next-i18next';

export default function Index() {
  useLocaleRedirect();

  const { t } = useTranslation('common');

  return (
    <div className="wrapper flex flex-col items-center justify-center">
      <span className="pointer-events-none select-none text-9xl font-bold leading-none text-secondary md:text-[300px] lg:text-[400px]">
        404
      </span>
      <span className="mt-4 text-xl font-semibold md:absolute md:mt-0 md:text-3xl lg:text-4xl">
        {t('page-not-found')}
      </span>
    </div>
  );
}

export { getStaticProps } from './[locale]';
