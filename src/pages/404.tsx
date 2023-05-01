import { useLocaleRedirect } from '@/hooks/useLocaleRedirect';

export default function Index() {
  useLocaleRedirect();

  return (
    <div className="wrapper flex h-full flex-col items-center justify-center pb-12 pt-8">
      <span className="pointer-events-none select-none text-[400px] font-bold leading-none opacity-20">
        404
      </span>
      <span className="absolute text-4xl font-bold">Page not found</span>
    </div>
  );
}

export { getStaticProps } from './[locale]';
