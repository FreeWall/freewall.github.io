import Home from '@/components/home';
import { useLocaleRedirect } from '@/hooks/useLocaleRedirect';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';

export default function Index() {
  useLocaleRedirect();

  return <Home />;
}

export const getStaticProps = async (ctx: any) => {
  const { locales } = nextI18NextConfig.i18n;

  return {
    props: {
      locales,
      ...(await serverSideTranslations(
        ctx.locale ?? nextI18NextConfig.i18n.defaultLocale,
        ['common'],
      )),
    },
  };
};
