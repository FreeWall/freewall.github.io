import { useTranslation } from 'next-i18next';

export default function Skills() {
  const { t } = useTranslation('common');

  return (
    <div className="">
      <div className="wrapper py-16">
        <h2 className="text-3xl font-semibold text-hightlight">
          {t('skills')}
        </h2>
      </div>
    </div>
  );
}
