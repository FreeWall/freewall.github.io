import DefaultLayout from '@/components/layout';
import { AppProvider } from '@/contexts/app';
import { CustomAppProps } from '@/types/app';
import { appWithTranslation } from 'next-i18next';
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
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
};

export default appWithTranslation(CustomApp, nextI18NextConfig);
