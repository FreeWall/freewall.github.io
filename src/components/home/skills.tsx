import ApacheIcon from '@public/images/skills/apache.svg';
import ApolloIcon from '@public/images/skills/apollo.svg';
import DebianIcon from '@public/images/skills/debian.svg';
import GraphQLIcon from '@public/images/skills/graphql.svg';
import HtmlIcon from '@public/images/skills/html5.svg';
import JavaIcon from '@public/images/skills/java.svg';
import JestIcon from '@public/images/skills/jest.svg';
import MagentoIcon from '@public/images/skills/magento.svg';
import MysqlIcon from '@public/images/skills/mysql.svg';
import NetteIcon from '@public/images/skills/nette.svg';
import NextJsIcon from '@public/images/skills/nextjs.svg';
import NodeIcon from '@public/images/skills/nodejs.svg';
import PhpIcon from '@public/images/skills/php.svg';
import ReactIcon from '@public/images/skills/react.svg';
import TailwindCssIcon from '@public/images/skills/tailwindcss.svg';
import TrpcIcon from '@public/images/skills/trpc.svg';
import TypeScriptIcon from '@public/images/skills/ts.svg';
import WebpackIcon from '@public/images/skills/webpack.svg';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { PropsWithChildren } from 'react';

interface SkillIconProps extends PropsWithChildren {
  name: string;
  size: 'large' | 'medium' | 'small';
  rotate: number;
  className?: string;
}

function SkillIcon(props: SkillIconProps) {
  if (props.size == 'large') {
    return (
      <div
        className={classNames(
          'group z-20 flex h-32 w-32 scale-100 items-center rounded-full bg-secondary transition-[scale_0s] hover:scale-110',
          props.className,
        )}
      >
        {props.children}
        <div
          className={classNames(
            'absolute left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-center text-sm font-medium opacity-0 group-hover:opacity-100',
            {
              '-top-6 pb-2': props.rotate >= 90,
              '-bottom-6 pt-2': props.rotate >= -90 && props.rotate < 90,
            },
          )}
        >
          {props.name}
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ rotate: props.rotate + 'deg' }}
    >
      <div
        className={classNames(
          'group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-secondary transition-[scale_0s] hover:scale-110',
          { 'mt-40 h-24 w-24': props.size == 'medium' },
          { 'mt-36 h-16 w-16': props.size == 'small' },
        )}
      >
        <div
          className="flex h-full w-full"
          style={{ rotate: -props.rotate + 'deg' }}
        >
          <div
            className={classNames(
              'flex h-full w-full items-center',
              props.className,
            )}
          >
            {props.children}
          </div>
          <div
            className={classNames(
              'absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-sm font-medium opacity-0 group-hover:opacity-100',
              {
                '-top-6 pb-2': props.rotate >= 90,
                '-bottom-6 pt-2': props.rotate >= -90 && props.rotate < 90,
              },
            )}
          >
            {props.name}
          </div>
        </div>
      </div>
      {props.size == 'medium' && (
        <div className="absolute mt-40 h-24 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute bottom-16 left-1/2 flex h-full w-8 -translate-x-1/2 bg-secondary" />
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation('common');

  return (
    <div className="">
      <div className="wrapper py-16">
        <h2 className="mb-10 text-3xl font-semibold text-hightlight">
          {t('skills')}
        </h2>
        <div className="space-y-10">
          <div className="flex items-center space-x-20">
            <div className="relative p-32">
              <SkillIcon
                name="Next.js"
                size="medium"
                rotate={120}
                className="p-4"
              >
                <NextJsIcon />
              </SkillIcon>
              <SkillIcon
                name="TypeScript"
                size="medium"
                rotate={240}
                className="p-6"
              >
                <TypeScriptIcon />
              </SkillIcon>
              <SkillIcon
                name="HTML5"
                size="medium"
                rotate={0}
                className="p-6"
              >
                <HtmlIcon />
              </SkillIcon>
              <SkillIcon
                name="React"
                size="large"
                rotate={120}
                className="p-4"
              >
                <ReactIcon />
              </SkillIcon>
              <SkillIcon
                name="GraphQL"
                size="small"
                rotate={162}
                className="p-3"
              >
                <GraphQLIcon />
              </SkillIcon>
              <SkillIcon
                name="Apollo Client"
                size="small"
                rotate={198}
                className="p-3"
              >
                <ApolloIcon />
              </SkillIcon>
              <SkillIcon
                name="tRPC"
                size="small"
                rotate={42}
                className="p-3.5"
              >
                <TrpcIcon />
              </SkillIcon>
              <SkillIcon
                name="Tailwind CSS"
                size="small"
                rotate={78}
                className="p-3"
              >
                <TailwindCssIcon />
              </SkillIcon>
              <SkillIcon
                name="Webpack"
                size="small"
                rotate={-42}
                className="p-3.5"
              >
                <WebpackIcon />
              </SkillIcon>
              <SkillIcon
                name="Jest"
                size="small"
                rotate={-78}
                className="p-4"
              >
                <JestIcon />
              </SkillIcon>
            </div>
            <div className="w-2/5">
              <h3 className="mb-4 text-3xl font-semibold text-hightlight">
                Frontend
              </h3>
              <p className="text-base">
                - react, nextjs, typescript, tailwindcss
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-20">
            <div className="w-2/5">
              <h3 className="mb-4 text-3xl font-semibold text-hightlight">
                Backend
              </h3>
              <p className="text-base">
                - php, mysql, magento, nette, apache, linux
              </p>
            </div>
            <div className="relative p-32">
              <SkillIcon
                name="PHP"
                size="medium"
                rotate={120}
                className="p-4"
              >
                <PhpIcon />
              </SkillIcon>
              <SkillIcon
                name="MySQL"
                size="medium"
                rotate={240}
                className="p-3"
              >
                <MysqlIcon />
              </SkillIcon>
              <SkillIcon
                name="Nette"
                size="medium"
                rotate={0}
                className="p-3"
              >
                <NetteIcon />
              </SkillIcon>
              <SkillIcon
                name="Magento"
                size="large"
                rotate={120}
                className="p-6"
              >
                <MagentoIcon />
              </SkillIcon>
              <SkillIcon
                name="Java"
                size="small"
                rotate={42}
                className="p-4"
              >
                <JavaIcon />
              </SkillIcon>
              <SkillIcon
                name="Linux Debian"
                size="small"
                rotate={78}
                className="p-4"
              >
                <DebianIcon />
              </SkillIcon>
              <SkillIcon
                name="Node.js"
                size="small"
                rotate={-42}
                className="p-3"
              >
                <NodeIcon />
              </SkillIcon>
              <SkillIcon
                name="Apache"
                size="small"
                rotate={-78}
                className="p-4"
              >
                <ApacheIcon />
              </SkillIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
