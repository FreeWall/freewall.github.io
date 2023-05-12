import Cv from '@/components/cv';
import { renderToBuffer } from '@react-pdf/renderer';
import fs from 'fs';
import i18n from 'i18next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import nextI18NextConfig from '../../../next-i18next.config';

export default function Index() {
  const { t } = useTranslation('common');

  if (true) {
    return null;
  }

  return (
    <Cv
      t={t}
      locale={'cs'}
    />
  );
}

Index.getLayout = false;

import cs from '@/locales/cs/common.json';
import en from '@/locales/en/common.json';
import { i18nextLocale } from '@/utils/i18next';

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

  i18n.use(initReactI18next).init({
    defaultNS: 'common',
    lng: ctx.params?.locale as string,
    resources: {
      cs: {
        common: cs,
      },
      en: {
        common: en,
      },
    },
  });

  const buffer = await renderToBuffer(
    <I18nextProvider
      i18n={i18n}
      defaultNS={'common'}
    >
      <Cv
        t={i18n.t}
        locale={ctx.params?.locale as i18nextLocale}
      />
    </I18nextProvider>,
  );

  fs.writeFileSync(
    'public/cv/' + ctx.params?.locale + '/michalvanek.pdf',
    buffer,
  );

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
