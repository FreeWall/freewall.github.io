import { useApp } from '@/contexts/app';
import InterMedium from '@/fonts/Inter-Medium.ttf';
import InterRegular from '@/fonts/Inter-Regular.ttf';
import InterSemibold from '@/fonts/Inter-SemiBold.ttf';
import { i18nextLocale } from '@/utils/i18next';
import { Document, Font, Page, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { createTw } from 'react-pdf-tailwind';
import Head from './head';
import Perex from './perex';
import Projects from './projects';
import Sidebar from './sidebar';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: InterRegular,
      fontWeight: 'regular',
    },
    {
      src: InterMedium,
      fontWeight: 'medium',
    },
    {
      src: InterSemibold,
      fontWeight: 'semibold',
    },
  ],
});

const tw = createTw({
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      colors: {
        body: '#35393e',
        conversion: '#36a9dc',
      },
    },
  },
});

export default function Cv({
  t,
  locale,
}: {
  t: TFunction<'common'>;
  locale: i18nextLocale;
}) {
  const { author } = useApp();

  return (
    <Document title={author.fullname}>
      <Page
        size="A4"
        style={tw('font-inter text-body')}
      >
        <View style={tw('flex flex-row w-full h-full')}>
          <Sidebar
            t={t}
            tw={tw}
            locale={locale}
          />

          <View>
            <Head
              t={t}
              tw={tw}
            />
            <Perex
              t={t}
              tw={tw}
            />
            <Projects
              t={t}
              tw={tw}
              locale={locale}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}
