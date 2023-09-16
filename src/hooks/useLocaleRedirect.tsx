import languageDetector from 'next-language-detector';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import nextI18NextConfig from '../../next-i18next.config';

export const useLocaleRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  useEffect(() => {
    if (router.query.locale == nextI18NextConfig.i18n.defaultLocale) {
      router.replace(
        '/' + (to && to.startsWith('/' + router.query.locale) ? '' : to),
      );
    }
  }, [router, to]);

  useEffect(() => {
    const detectedLng = lngDetector.detect();

    if (!detectedLng || detectedLng == nextI18NextConfig.i18n.defaultLocale) {
      return;
    }

    if (to && to.startsWith('/' + detectedLng)) {
      return;
    }

    lngDetector.cache?.(detectedLng);
    router.replace('/' + detectedLng + to);
  });

  return <></>;
};

const lngDetector = languageDetector({
  supportedLngs: nextI18NextConfig.i18n.locales,
  fallbackLng: nextI18NextConfig.i18n.defaultLocale,
});
