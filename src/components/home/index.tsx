import { useTranslation } from 'next-i18next';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Michal Vaněk | web developer</title>
      </Head>
      <div className="font-bold">home page {t('hello-key')}</div>
    </>
  );
}
