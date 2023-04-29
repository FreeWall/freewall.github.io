import {
  Document,
  Font,
  Image as Img,
  Page,
  PDFViewer,
  Text,
  View,
} from '@react-pdf/renderer';
import profilephoto from 'public/images/profilephoto-nature.png';
import { useEffect, useState } from 'react';
import { createTw } from 'react-pdf-tailwind';
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

function PDF() {
  return (
    <Document>
      <Page
        size="A4"
        style={tw('font-inter text-body')}
      >
        <View style={tw('flex flex-row w-full h-full')}>
          <View style={tw('bg-[#e8eef2] w-[30%] py-10')}>
            <Img
              src={profilephoto.src}
              style={tw('rounded-full mx-auto -rotate-[4] w-[125px]')}
            />
          </View>

          <View style={tw('')}>
            <View style={tw('py-10 pl-10')}>
              <Text style={tw('text-4xl font-semibold leading-5 mb-2')}>
                Michal Vaněk
              </Text>
              <Text style={tw('text-[19px] font-medium mb-5')}>
                web developer
              </Text>
              <View style={tw('w-[40px] h-[4px] bg-conversion')} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default function Index() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <PDFViewer
      className="flex-co rotat text-2 leading-3"
      width={842}
      height={1192}
      showToolbar={false}
    >
      <PDF />
    </PDFViewer>
  );
}

Index.getLayout = false;

/* export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const value = await renderToFile(
    <Document>
      <Page>
        <Html>{html}</Html>
      </Page>
    </Document>,
  );

  return {
    props: {},
  };
};
 */
