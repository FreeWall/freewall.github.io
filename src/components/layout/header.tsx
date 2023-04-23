import { useApp } from '@/contexts/app';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isCompact, setCompact] = useState(false);
  const { author, links } = useApp();

  const onScroll = () => {
    setCompact(window.scrollY > 10);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const names = author.fullname.split(' ');

  return (
    <header
      className={classNames('fixed w-full', {
        'shadow-md': isCompact,
      })}
    >
      <div className="wrapper flex w-full items-center justify-between py-11">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl">
              <span className="font-semibold text-hightlight">{names[0]}</span>{' '}
              <span className="text-[#dddddd]">{names[1]}</span>
            </a>
          </Link>
          <div className="mx-5 h-[22px] w-1 bg-conversion"></div>
          <div className="text-xl">{author.label}</div>
        </div>
        <div className="flex items-center space-x-10">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
            >
              <a
                className="flex items-center hover:text-hightlight"
                target="_blank"
              >
                <link.icon
                  className="text-hightlight"
                  size={24}
                />
                <span className="ml-3 py-1 text-base">{link.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
