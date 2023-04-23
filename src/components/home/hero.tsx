import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="wrapper">
        <Image
          src="/images/profilephoto.png"
          width={330}
          height={330}
          quality={100}
          alt=""
        />
      </div>
    </>
  );
}
