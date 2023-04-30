import Cv from '@/components/cv';
import { PDFViewer, renderToBuffer } from '@react-pdf/renderer';
import fs from 'fs';
import i18n from 'i18next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import nextI18NextConfig from '../../../next-i18next.config';

export default function Index() {
  const [hydrated, setHydrated] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="w-full">
      {/* <img
        className="absolute left-[50%] -ml-[397px] mt-[59px] pr-[18px] opacity-0 hover:opacity-75"
        src="/images/cv-scaled.png"
      /> */}
      <PDFViewer
        className="mx-auto p-0"
        width={842}
        height={1192}
        showToolbar={true}
      >
        <Cv t={t} />
      </PDFViewer>
    </div>
  );
}

Index.getLayout = false;

import cs from '@/locales/cs/common.json';
import en from '@/locales/en/common.json';

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
      <Cv t={i18n.t} />
    </I18nextProvider>,
  );

  fs.writeFileSync('public/cv/' + ctx.params?.locale + '.pdf', buffer);

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
