import { useApp } from '@/contexts/app';
import Head from 'next/head';
import Hero from './hero';
import Projects from './projects';

export default function Home() {
  const { author } = useApp();

  return (
    <>
      <Head>
        <title>{author.fullname + ' | web developer'}</title>
      </Head>
      <Hero />
      <Projects />
      {/*
      <Projects />
      <Skills /> */}
    </>
  );
}
