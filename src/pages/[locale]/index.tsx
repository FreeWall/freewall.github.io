import Home from '@/components/home';
import { useLocaleRedirect } from '@/hooks/useLocaleRedirect';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../../next-i18next.config';

export default function Index() {
  useLocaleRedirect();

  return <Home />;
}

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: nextI18NextConfig.i18n.locales.map((locale) => ({
    params: {
      locale,
    },
  })),
});

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { locales } = nextI18NextConfig.i18n;

  return {
    props: {
      locales,
      ...(await serverSideTranslations(
        ctx.params.locale ?? nextI18NextConfig.i18n.defaultLocale,
        ['common'],
      )),
    },
  };
};
