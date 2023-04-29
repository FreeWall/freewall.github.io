import { useApp } from '@/contexts/app';
import {
  Document,
  Font,
  Image as Img,
  Page,
  PDFViewer,
  Text,
  View,
} from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import profilephoto from 'public/images/profilephoto-nature.png';
import { useEffect, useState } from 'react';
import { createTw } from 'react-pdf-tailwind';
import nextI18NextConfig from '../../next-i18next.config';
import InterMedium from '../fonts/Inter-Medium.ttf';
import InterRegular from '../fonts/Inter-Regular.ttf';
import InterSemibold from '../fonts/Inter-Semibold.ttf';

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

function PDFDocument({ t }: { t: TFunction<'common'> }) {
  const { author } = useApp();

  return (
    <Document>
      <Page
        size="A4"
        style={tw('font-inter text-body')}
      >
        <View style={tw('flex flex-row w-full h-full')}>
          <View style={tw('bg-[#e8eef2] w-[32%] py-10')}>
            <Img
              src={profilephoto.src}
              style={tw('rounded-full mx-auto -rotate-[4] w-[125px] mb-10')}
            />

            <View style={tw('pl-8 mb-10')}>
              <Text style={tw('text-[19px] font-semibold mb-7 leading-none')}>
                {t('contact')}
              </Text>
              <View>
                <Text style={tw('text-base leading-none mb-3')}>
                  {author.phone}
                </Text>
                <Text style={tw('text-base leading-none mb-3')}>
                  {author.email}
                </Text>
                <Text style={tw('text-base leading-none')}>{author.city}</Text>
              </View>
            </View>

            <View style={tw('pl-8 mb-10')}>
              <Text style={tw('text-[19px] font-semibold mb-7 leading-none')}>
                {t('skills')}
              </Text>
              <View style={tw('text-base')}>
                <Text style={tw('font-semibold leading-none mb-4')}>
                  Frontend
                </Text>
                <Text>React, TypeScript, Next.js,</Text>
                <Text>tRPC, GraphQL, Apollo,</Text>
                <Text>Tailwind CSS, Webpack,</Text>
                <Text>Jest, jQuery, LESS</Text>
              </View>
              <View style={tw('text-base mt-6')}>
                <Text style={tw('font-semibold leading-none mb-4')}>
                  Backend
                </Text>
                <Text>PHP, MySQL, Magento,</Text>
                <Text>Node.js, Nette, Latte,</Text>
                <Text>Java, Apache, Linux</Text>
              </View>
            </View>

            <View style={tw('pl-8 mb-10')}>
              <Text style={tw('text-[19px] font-semibold mb-7 leading-none')}>
                {t('education')}
              </Text>
              <View style={tw('text-base')}>
                <Text style={tw('font-semibold')}>ZČU v Plzni</Text>
                <Text>Informatika</Text>
                <Text>2013 - 2015</Text>
              </View>
              <View style={tw('text-base mt-6')}>
                <Text style={tw('font-semibold')}>VOŠ a SPŠE Plzeň</Text>
                <Text>Správa počítačových sítí</Text>
                <Text>2009 - 2013</Text>
              </View>
              <View style={tw('text-base mt-6')}>
                <Text style={tw('font-semibold')}>Angličtina B2</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={tw('p-10')}>
              <Text style={tw('text-4xl font-semibold leading-5 mb-2')}>
                {author.fullname}
              </Text>
              <Text style={tw('text-[19px] font-medium mb-5')}>
                web developer
              </Text>
              <View style={tw('w-[40px] h-[4px] bg-conversion')} />
            </View>
            <View style={tw('px-10 mt-2')}>
              <Text style={tw('text-[19px] font-semibold mb-5 leading-none')}>
                {t('experience')}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

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
    <div>
      <PDFViewer
        className="mx-auto"
        width={842}
        height={1192}
        showToolbar={true}
      >
        <PDFDocument t={t} />
      </PDFViewer>
    </div>
  );
}

Index.getLayout = false;

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { locales } = nextI18NextConfig.i18n;

  return {
    props: {
      locales,
      ...(await serverSideTranslations(
        ctx.params?.locale ?? nextI18NextConfig.i18n.defaultLocale,
        ['common'],
      )),
    },
  };
};
