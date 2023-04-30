import { ProjectProps, useApp } from '@/contexts/app';
import { useTranslation } from 'next-i18next';

export default function Projects() {
  const { t } = useTranslation('common');
  const { projects } = useApp();

  return (
    <div className="bg-secondary">
      <div className="wrapper py-16">
        <h2 className="text-3xl font-semibold text-hightlight">
          {t('experience')}
        </h2>
        <div>
          {projects.map((project, idx) => (
            <Project
              key={idx}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Project(props: ProjectProps) {
  return null;
  /* return (
    <div>
      <div>
        <div>{props.years}</div>
        <div>{props.type}</div>
      </div>
      <div />
      <div>
        <div>
          {(props.url && (
            <h3>
              <a
                href={props.url}
                target="_blank"
              >
                {props.name}
                <FaExternalLinkAlt />
              </a>
            </h3>
          )) || <h3>{props.name}</h3>}
          <h4>{props.subtitle}</h4>
          <div>
            <div>{props.type}</div>
            <div>{props.years}</div>
          </div>
          <div>{props.description}</div>
          <div>
            <div>Technologie</div>
            <div>
              {props.technologies.map((technology) => (
                <div>{technology}</div>
              ))}
            </div>
          </div>
        </div>
        {props.thumbnail && (
          <div>
            {props.images && (
              <div onClick={() => props.onGalleryClick()}>
                <img
                  src={props.thumbnail}
                  alt={props.name}
                />
                <div>
                  <span>{props.images.length}</span>
                </div>
              </div>
            )}
            {!props.images && (
              <img
                src={props.thumbnail}
                alt={props.name}
              />
            )}
          </div>
        )}
      </div>
    </div>
  ); */
}
