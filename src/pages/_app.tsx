import DefaultLayout from '@/components/layout';
import { AppProvider } from '@/contexts/app';
import { CustomAppProps } from '@/types/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { ReactNode } from 'react';
import nextI18NextConfig from '../../next-i18next.config';
import '../styles/globals.css';

const CustomApp = ({
  Component,
  pageProps: { appContextProps, ...pageProps },
}: CustomAppProps) => {
  const getLayout =
    Component.getLayout === undefined
      ? (component: ReactNode) => <DefaultLayout>{component}</DefaultLayout>
      : Component.getLayout
      ? Component.getLayout
      : (component: ReactNode) => component;

  return (
    <AppProvider props={appContextProps}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
};

export default appWithTranslation(CustomApp, nextI18NextConfig);
