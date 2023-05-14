import { useApp } from '@/contexts/app';
import { Image as Img, Path, Svg, Text, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { createTw } from 'react-pdf-tailwind';
import image from '../../../public/images/profilephoto-nature.jpg';

export default function Sidebar({
  t,
  tw,
}: {
  t: TFunction<'common'>;
  tw: ReturnType<typeof createTw>;
}) {
  const { author } = useApp();

  return (
    <View style={tw('bg-[#e8eef2] w-[29.2%] py-10')}>
      <Img
        source={image}
        style={tw('rounded-full mx-auto -rotate-[5] w-[67%] mb-9')}
      />

      <View style={tw('pl-6')}>
        <View style={tw('mb-7')}>
          <Text style={tw('text-[18.5px] font-semibold mb-7 leading-none')}>
            {t('contact')}
          </Text>
          <View>
            <View style={tw('flex flex-row items-center mb-3.5')}>
              <Svg
                viewBox="0 0 24 24"
                width={11}
                height={11}
                style={{
                  width: '14px',
                  transform: 'scaleX(-1)',
                }}
              >
                <Path
                  fill="#35393e"
                  d={
                    'M23.13 1.15L18.25 0.03C17.72-0.09 17.18 0.18 16.96 0.68L14.71 5.93C14.52 6.39 14.65 6.93 15.04 7.24L17.88 9.57C16.19 13.16 13.24 16.15 9.57 17.87L7.25 15.03C6.93 14.64 6.39 14.51 5.93 14.71L0.68 16.96C0.18 17.18-0.09 17.72 0.03 18.25L1.15 23.13C1.27 23.63 1.72 24 2.25 24 14.25 24 24 14.27 24 2.25 24 1.72 23.64 1.27 23.13 1.15Z'
                  }
                />
              </Svg>
              <Text style={tw('text-sm leading-none ml-3')}>
                {author.phone}
              </Text>
            </View>
            <View style={tw('flex flex-row items-center mb-3.5')}>
              <Svg
                viewBox="0 0 24 24"
                width={14}
                height={14}
                style={tw('w-[14px]')}
              >
                <Path
                  fill="#35393e"
                  d={
                    'M22.29 20.14V9.86Q21.86 10.34 21.36 10.74 17.77 13.5 15.66 15.27 14.97 15.84 14.54 16.17T13.39 16.81 12.01 17.14H12 11.99Q11.34 17.14 10.61 16.81T9.46 16.17 8.34 15.27Q6.23 13.5 2.64 10.74 2.14 10.34 1.71 9.86V20.14Q1.71 20.32 1.84 20.44T2.14 20.57H21.86Q22.03 20.57 22.16 20.44T22.29 20.14ZM22.29 6.07V5.92 5.74T22.28 5.56 22.24 5.4 22.17 5.28 22.04 5.18 21.86 5.14H2.14Q1.97 5.14 1.84 5.27T1.71 5.57Q1.71 7.82 3.68 9.37 6.27 11.41 9.05 13.62 9.13 13.69 9.52 14.02T10.14 14.52 10.73 14.94 11.41 15.31 11.99 15.43H12 12.01Q12.28 15.43 12.59 15.31T13.27 14.94 13.86 14.52 14.48 14.02 14.95 13.62Q17.73 11.41 20.32 9.37 21.04 8.8 21.66 7.83T22.29 6.07ZM24 5.57V20.14Q24 21.03 23.37 21.66T21.86 22.29H2.14Q1.26 22.29 0.63 21.66T0 20.14V5.57Q0 4.69 0.63 4.06T2.14 3.43H21.86Q22.74 3.43 23.37 4.06T24 5.57Z'
                  }
                />
              </Svg>
              <Text style={tw('text-sm leading-none ml-3')}>
                {author.email}
              </Text>
            </View>
            <View style={tw('flex flex-row items-center mb-3.5')}>
              <Svg
                viewBox="0 0 18 24"
                width={14}
                height={14}
                style={tw('w-[14px]')}
              >
                <Path
                  fill="#35393e"
                  d={
                    'M8.08 23.52C1.26 13.64 0 12.63 0 9 0 4.03 4.03 0 9 0S18 4.03 18 9C18 12.63 16.74 13.64 9.92 23.52 9.48 24.16 8.52 24.16 8.08 23.52ZM9 12.75C11.07 12.75 12.75 11.07 12.75 9S11.07 5.25 9 5.25 5.25 6.93 5.25 9 6.93 12.75 9 12.75Z'
                  }
                />
              </Svg>
              <Text style={tw('text-sm leading-none ml-3')}>{author.city}</Text>
            </View>
          </View>
        </View>

        <View style={tw('mb-10')}>
          <Text style={tw('text-[18.5px] font-semibold mb-7 leading-none')}>
            {t('skills')}
          </Text>
          <View style={tw('text-sm leading-6')}>
            <Text style={tw('font-semibold leading-none mb-4')}>Frontend</Text>
            <Text>React, TypeScript, Next.js,</Text>
            <Text>tRPC, GraphQL, Apollo,</Text>
            <Text>Tailwind CSS, Webpack,</Text>
            <Text>Jest, jQuery, LESS</Text>
          </View>
          <View style={tw('text-sm leading-6 mt-6')}>
            <Text style={tw('font-semibold leading-none mb-4')}>Backend</Text>
            <Text>PHP, MySQL, Magento,</Text>
            <Text>Node.js, Nette, Latte,</Text>
            <Text>Java, Apache, Linux</Text>
          </View>
        </View>

        <View style={tw('mb-10')}>
          <Text style={tw('text-[18.5px] font-semibold mb-7 leading-none')}>
            {t('education')}
          </Text>
          <View style={tw('text-sm leading-6')}>
            <Text style={tw('font-semibold')}>ZČU v Plzni</Text>
            <Text>Informatika</Text>
            <Text>2013 - 2015</Text>
          </View>
          <View style={tw('text-sm leading-6 mt-6')}>
            <Text style={tw('font-semibold')}>VOŠ a SPŠE Plzeň</Text>
            <Text>Správa počítačových sítí</Text>
            <Text>2009 - 2013</Text>
          </View>
          <View style={tw('text-sm leading-6 mt-6')}>
            <Text style={tw('font-semibold')}>Angličtina B2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
