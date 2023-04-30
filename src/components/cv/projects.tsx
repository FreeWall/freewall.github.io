import { useApp } from '@/contexts/app';
import { Text, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { createTw } from 'react-pdf-tailwind';

export default function Projects({
  t,
  tw,
}: {
  t: TFunction<'common'>;
  tw: ReturnType<typeof createTw>;
}) {
  const { projects } = useApp();

  const filteredProjects = projects.filter(
    (project, idx) => idx < projects.length - 1,
  );

  return (
    <View style={tw('pl-[2.4rem]')}>
      <Text style={tw('text-[18.5px] font-semibold mb-8 leading-none')}>
        {t('experience')}
      </Text>
      {filteredProjects.map((project, idx) => (
        <View
          key={idx}
          style={tw('flex flex-row')}
        >
          <View style={tw('w-[78px] flex items-center')}>
            <Text
              style={tw(
                'text-sm text-[#666666] font-medium leading-none mt-0.5 mb-2',
              )}
            >
              {project.years}
            </Text>
            <Text
              style={tw(
                'text-[0.6rem] text-[#555555] font-medium rounded-[2px] px-2 py-1.5 mb-5 uppercase bg-[#ebebeb]',
              )}
            >
              {project.type}
            </Text>
          </View>
          <View style={tw('ml-4 mr-7')}>
            {idx < filteredProjects.length - 1 && (
              <View
                style={tw('absolute top-[6px] w-[2px] bg-[#dddddd] h-full')}
              />
            )}
            <View
              style={tw(
                'absolute left-[-2.5px] top-[4px] w-[7px] h-[7px] bg-conversion rounded-full',
              )}
            />
          </View>
          <View style={tw('w-[255px] pb-[1.45em]')}>
            <Text style={tw('text-base font-semibold')}>{project.name}</Text>
            <Text style={tw('text-sm font-medium mb-3.5')}>
              {project.subtitle}
            </Text>
            <Text style={tw('text-[0.75rem] leading-[1.45rem]')}>
              {project.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
