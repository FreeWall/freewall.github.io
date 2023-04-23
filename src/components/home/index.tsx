import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Hero from './hero';
import Projects from './projects';
import Skills from './skills';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Michal Vaněk | web developer</title>
      </Head>
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}
