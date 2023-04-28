import { useApp } from '@/contexts/app';
import Link from 'next/link';
import { GrDocumentPdf } from 'react-icons/gr';

export default function Footer() {
  const { author, links } = useApp();

  return (
    <footer className="bg-secondary">
      <div className="wrapper flex w-full items-center justify-between py-8">
        <div className="text-sm leading-6">
          <div className="font-medium text-hightlight">{author.fullname}</div>

          {author.address.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <div className="flex items-center space-x-10 text-base font-medium">
          <a
            className="flex cursor-pointer items-center hover:text-hightlight"
            onClick={(e) => {
              e.preventDefault();
              alert('click');
            }}
          >
            <GrDocumentPdf
              className="forceStroke text-hightlight"
              size={22}
            />
            <span className="ml-3 py-1">Životopis</span>
          </a>
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
                <span className="ml-3 py-1">{link.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
