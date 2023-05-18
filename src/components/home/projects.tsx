import { ProjectProps, Technology, useApp } from '@/contexts/app';
import { i18nextLocale } from '@/utils/i18next';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dist/shared/lib/dynamic';
import Image from 'next/future/image';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const technologyColor: Record<Technology, string> = {
  PHP: '#8b90d1',
  MySQL: '#5a8cae',
  Magento: '#eb6636',
  Redis: '#d12b1f',
  JS: '#efd81d',
  TS: '#388ae4',
  React: '#61dafb',
  'Next.js': '#ffffff',
  Java: '#e51f24',
  jQuery: '#0a7bca',
  Nette: '#368bdd',
  Pawn: '#c7983c',
  HTML: '#dd4b25',
  C: '#006bbb',
};

const Gallery = dynamic(() => import('./gallery'));

export default function Projects() {
  const { t, i18n } = useTranslation('common');
  const { projects } = useApp();
  const [galleryProject, setGalleryProject] = useState<ProjectProps>();

  return (
    <div className="bg-secondary">
      {galleryProject && (
        <Gallery
          project={galleryProject}
          onClose={() => setGalleryProject(undefined)}
        />
      )}
      <div className="wrapper py-8 md:py-16">
        <h2 className="mb-8 text-2xl font-semibold text-hightlight md:mb-16 md:text-3xl">
          {t('experience')}
        </h2>
        <div>
          {projects.map((project, idx) => (
            <div
              className="mb-4 flex pb-7 last:mb-0 last:pb-0 md:mb-0 md:pb-0"
              key={idx}
            >
              <div className="hidden flex-shrink-0 flex-grow-0 basis-[120px] flex-col items-center md:flex">
                <div className="mb-1.5 text-lg font-medium">
                  {project.years}
                </div>
                <div className="rounded-[3px] bg-main px-2 py-1.5 text-2xs font-medium uppercase">
                  {project.type[i18n.language as i18nextLocale]}
                </div>
              </div>
              <div className="relative ml-7 mr-10 hidden md:block">
                {idx < projects.length - 1 && (
                  <div className="absolute left-[calc(50%_-_2px)] top-[6px] h-full w-[4px] bg-main" />
                )}
                <div className="absolute left-[calc(50%_-_6px)] top-[6px] h-[12px] w-[12px] rounded-full bg-conversion" />
              </div>
              <div className="flex-grow md:mb-14 md:flex-shrink-0 lg:flex">
                <div className="flex-1">
                  <div className="flex items-center md:block">
                    <div className="mr-4 h-[44px] w-1 bg-conversion md:hidden"></div>
                    <div>
                      <h3 className="text-lg font-semibold leading-none text-hightlight md:text-xl">
                        {(project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center"
                          >
                            {project.name}
                            <FaExternalLinkAlt className="ml-3 text-base text-body group-hover:text-hightlight md:text-lg" />
                          </a>
                        )) ||
                          project.name}
                      </h3>
                      <h4 className="mt-2 text-base font-medium leading-none text-[#dddddd] md:mt-1.5 md:text-lg md:leading-normal">
                        {project.subtitle[i18n.language as i18nextLocale]}
                      </h4>
                    </div>
                  </div>
                  <div className="mb-2.5 mt-4 font-medium md:hidden">
                    {project.years}
                  </div>
                  {project.description?.[i18n.language as i18nextLocale] && (
                    <p className="mt-0 max-w-lg text-xs md:mt-5 md:text-base">
                      {project.description?.[i18n.language as i18nextLocale]}
                    </p>
                  )}
                  <div className="mt-4 md:mt-5">
                    <div className="mb-2 text-2xs font-medium uppercase md:text-xs">
                      {t('technologies')}
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.technologies?.map((technology, idx) => (
                        <div
                          key={idx}
                          className="rounded-[3px] bg-main px-2 py-1 text-2xs font-semibold md:px-2.5 md:py-1.5 md:text-xs"
                          style={{ color: technologyColor[technology] }}
                        >
                          {technology}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {project.thumbnail && (
                  <div className="mt-6 lg:mt-0">
                    {project.images && (
                      <div className="w-full">
                        <Image
                          src={project.thumbnail}
                          alt={project.name}
                          width={270}
                          height={270}
                          className="max-w-[210px] cursor-pointer rounded-md lg:max-w-max"
                          onClick={() => setGalleryProject(project)}
                        />
                      </div>
                    )}
                    {!project.images && (
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        width={270}
                        height={270}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
