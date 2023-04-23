import { appWithTranslation } from 'next-i18next';
import { AppType } from 'next/app';
import nextI18NextConfig from '../../next-i18next.config';

const CustomApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(CustomApp, nextI18NextConfig);
