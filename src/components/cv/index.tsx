import { useApp } from '@/contexts/app';
import { Document, Font, Page, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { createTw } from 'react-pdf-tailwind';
import InterMedium from '../../fonts/Inter-Medium.ttf';
import InterRegular from '../../fonts/Inter-Regular.ttf';
import InterSemibold from '../../fonts/Inter-Semibold.ttf';
import Head from './head';
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

export default function Cv({ t }: { t: TFunction<'common'> }) {
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
          />

          <View>
            <Head
              t={t}
              tw={tw}
            />
            <Projects
              t={t}
              tw={tw}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}
