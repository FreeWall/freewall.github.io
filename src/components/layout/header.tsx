import { useApp } from '@/contexts/app';
import classNames from 'classnames';
import Image from 'next/future/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isCompact, setCompact] = useState(false);
  const { author, links } = useApp();

  const onScroll = () => {
    setCompact(window.scrollY > 40);
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
      className={classNames('fixed z-10 w-full bg-main', {
        'shadow-header': isCompact,
      })}
    >
      <div
        className={classNames(
          'wrapper flex w-full items-center justify-between px-5 py-5 transition-[padding] md:px-11',
          {
            'md:py-4': isCompact,
            'md:py-11': !isCompact,
          },
        )}
      >
        <div className="flex items-center md:flex">
          <div className="rounded-full bg-secondary md:hidden">
            <Image
              className="-rotate-[5deg] rounded-full"
              src="/images/profilephoto-transparent.webp"
              width={60}
              height={60}
              alt={author.fullname}
            />
          </div>
          <div className="mx-4 h-[50px] w-1 bg-conversion md:hidden" />
          <div className="items-center md:flex">
            <Link href="/">
              <a
                className="text-[20px] md:text-2xl"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <span className="font-semibold text-hightlight">
                  {names[0]}
                </span>{' '}
                <span className="text-[#dddddd]">{names[1]}</span>
              </a>
            </Link>
            <div className="mx-5 hidden h-[22px] w-1 bg-conversion md:block" />
            <div className="text-base font-medium md:text-[20px]">
              {author.label}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-base font-medium md:space-x-10">
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
                  className="text-hightlight md:w-6"
                  size={26}
                />
                <span className="ml-3 hidden py-1 md:block">{link.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
