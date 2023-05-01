import { useApp } from '@/contexts/app';
import { useTranslation } from 'next-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const { t } = useTranslation('common');
  const { projects } = useApp();

  return (
    <div className="bg-secondary">
      <div className="wrapper py-16">
        <h2 className="mb-16 text-3xl font-semibold text-hightlight">
          {t('experience')}
        </h2>
        <div>
          {projects.map((project, idx) => (
            <div
              className="flex"
              key={idx}
            >
              <div className="flex flex-shrink-0 flex-grow-0 basis-[120px] flex-col items-center">
                <div className="mb-1.5 text-lg font-medium">
                  {project.years}
                </div>
                <div className="mb-5 rounded-[2px] bg-main px-2 py-1.5 text-2xs font-medium uppercase ">
                  {project.type}
                </div>
              </div>
              <div className="relative ml-7 mr-10">
                {idx < projects.length - 1 && (
                  <div className="absolute left-[calc(50%_-_2px)] top-[6px] h-full w-[4px] bg-main"></div>
                )}
                <div className="absolute left-[calc(50%_-_6px)] top-[6px] h-[12px] w-[12px] rounded-full bg-conversion"></div>
              </div>
              <div className="mb-14 flex flex-shrink-0 flex-grow">
                <div>
                  <h3 className="text-xl font-semibold leading-none text-hightlight">
                    {(project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center"
                      >
                        {project.name}
                        <FaExternalLinkAlt className="ml-3 text-lg text-body group-hover:text-hightlight" />
                      </a>
                    )) ||
                      project.name}
                  </h3>
                  <h4 className="mt-1.5 text-lg font-medium text-[#dddddd]">
                    {project.subtitle}
                  </h4>
                  <p className="mt-5 max-w-lg text-base">
                    {project.description}
                  </p>
                  <div className="mt-5 hidden text-base">
                    <div>Technologie</div>
                    <div>
                      {project.technologies.map((technology) => (
                        <div>{technology}</div>
                      ))}
                    </div>
                  </div>
                </div>
                {false && project.thumbnail && (
                  <div>
                    {project.images && (
                      <div onClick={() => project.onGalleryClick()}>
                        <img
                          src={project.thumbnail}
                          alt={project.name}
                        />
                        <div>
                          <span>{project.images.length}</span>
                        </div>
                      </div>
                    )}
                    {!project.images && (
                      <img
                        src={project.thumbnail}
                        alt={project.name}
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
