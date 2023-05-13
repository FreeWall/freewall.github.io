import Home from '@/components/home';
import { AppContextProps } from '@/contexts/app';
import { useLocaleRedirect } from '@/hooks/useLocaleRedirect';
import { WakatimeLanguagesResponse } from '@/types/wakatime';
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

  const apiKey = process.env.WAKATIME_API_KEY;
  const userId = 'FreeWall';

  const { data }: WakatimeLanguagesResponse = await (
    await fetch('https://wakatime.com/api/v1/users/' + userId + '/stats', {
      headers: {
        Authorization: 'Basic ' + Buffer.from(apiKey).toString('base64'),
      },
    })
  ).json();

  const languages: AppContextProps['languages'] = [];

  data?.languages
    ?.sort((a, b) => b.total_seconds - a.total_seconds)
    .filter((language) => !['Other', 'JSON'].includes(language.name))
    .slice(0, 5)
    .map((language) => {
      languages.push({
        name: language.name,
        hours: language.hours,
        minutes: language.minutes,
      });
    });

  return {
    props: {
      locales,
      ...(await serverSideTranslations(
        (ctx.params?.locale as string) ?? nextI18NextConfig.i18n.defaultLocale,
        ['common'],
      )),
      appContextProps: {
        languages,
      },
    },
  };
};
