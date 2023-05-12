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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locales } = nextI18NextConfig.i18n;

  const apiKey = '';
  const userId = 'FreeWall';

  const data = await (
    await fetch(
      'https://wakatime.com/api/v1/users/' +
        userId +
        '/insights/languages/last_30_days',
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
        },
      },
    )
  ).json();

  console.log(data);

  return {
    props: {
      locales,
      ...(await serverSideTranslations(
        (ctx.params?.locale as string) ?? nextI18NextConfig.i18n.defaultLocale,
        ['common'],
      )),
    },
  };
};
