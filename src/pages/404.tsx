import { useLocaleRedirect } from '@/hooks/useLocaleRedirect';
import { useTranslation } from 'next-i18next';

export default function Index() {
  useLocaleRedirect();

  const { t } = useTranslation('common');

  return (
    <div className="wrapper flex flex-col items-center justify-center">
      <span className="pointer-events-none select-none text-[400px] font-bold leading-none text-secondary">
        404
      </span>
      <span className="absolute text-4xl font-semibold">
        {t('page-not-found')}
      </span>
    </div>
  );
}

export { getStaticProps } from './[locale]';
