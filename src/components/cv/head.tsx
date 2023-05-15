import { useApp } from '@/contexts/app';
import { Text, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { createTw } from 'react-pdf-tailwind';

export default function Head({
  t,
  tw,
}: {
  t: TFunction<'common'>;
  tw: ReturnType<typeof createTw>;
}) {
  const { author } = useApp();

  return (
    <View style={tw('px-[2.4rem] py-[2.6rem]')}>
      <Text style={tw('text-[2.12rem] font-semibold leading-5 mb-[0.3rem]')}>
        {author.fullname}
      </Text>
      <Text style={tw('text-[18.5px] font-medium mb-4')}>web developer</Text>
      <View style={tw('w-[40px] h-[4px] bg-conversion')} />
    </View>
  );
}
