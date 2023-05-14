import { useApp } from '@/contexts/app';
import { saveAs } from 'file-saver';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { GrDocumentPdf } from 'react-icons/gr';

export default function Footer() {
  const { t, i18n } = useTranslation('common');
  const { author, links } = useApp();

  return (
    <footer className="mt-auto bg-secondary">
      <div className="wrapper w-full items-center justify-between py-7 md:flex md:py-8">
        <div className="mb-5 text-xs leading-[22px] md:mb-0 md:text-sm md:leading-6">
          <div className="font-medium text-hightlight">{author.fullname}</div>

          {author.address.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <div className="flex flex-row-reverse items-center justify-between text-sm font-medium md:flex-row md:space-x-10 md:text-base">
          <a
            href={'/cv/' + i18n.language + '/michalvanek.pdf'}
            className="flex cursor-pointer items-center hover:text-hightlight"
            onClick={(e) => {
              e.preventDefault();
              saveAs(
                '/cv/' + i18n.language + '/michalvanek.pdf',
                'michalvanek.pdf',
              );
            }}
          >
            <GrDocumentPdf
              className="forceStroke text-hightlight"
              size={22}
            />
            <span className="ml-3 py-1">{t('resume')}</span>
          </a>
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
            >
              <a
                className="flex items-center last:hidden hover:text-hightlight md:last:flex"
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
