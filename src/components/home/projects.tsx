import { useTranslation } from 'next-i18next';

export default function Projects() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-secondary">
      <div className="wrapper py-16">
        <h2 className="text-3xl font-semibold text-hightlight">
          {t('experience')}
        </h2>
      </div>
    </div>
  );
}
