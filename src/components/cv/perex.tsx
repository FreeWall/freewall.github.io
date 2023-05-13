import { Text, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { createTw } from 'react-pdf-tailwind';

export default function Perex({
  t,
  tw,
}: {
  t: TFunction<'common'>;
  tw: ReturnType<typeof createTw>;
}) {
  return (
    <View style={tw('px-[2.4rem] mb-[2.6rem] text-base leading-6')}>
      {t('hero-text')
        .split('<br/>')
        .map((line, idx) => (
          <Text key={idx}>{line}</Text>
        ))}
    </View>
  );
}
