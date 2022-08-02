import TranslationsContext from '@/contexts/TranslationsContext';
import { useContext } from 'react';

const StoreButtons = () => {
  const { t, currentLocale } = useContext(TranslationsContext)

  return (
    <div className="md:max-w-lg text-center md:text-left mx-auto md:mx-0 flex flex-col md:flex-row gap-3 items-center">
      <a
        href="https://apps.apple.com/us/app/dersu/id1596941542"
        target="_blank"
        rel="noopener noreferrer"
        title={t.common.downloadAppApple}
        className="block"
      >
        <img
          src={`/images/common/icon-app-store-light.${currentLocale}.svg`}
          alt={t.common.downloadAppApple}
          className="h-16 md:h-10 rounded-[10px] md:rounded-[6px]"
          loading="lazy"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=uz.dersu"
        target="_blank"
        rel="noopener noreferrer"
        title={t.common.downloadAppGoogle}
        className="block"
      >
        <img
          src={`/images/common/icon-play-store-light.${currentLocale}.svg`}
          alt={t.common.downloadAppGoogle}
          className="h-16 md:h-10 rounded-[10px] md:rounded-[6px]"
          loading="lazy"
        />
      </a>
    </div>
  )
}

export default StoreButtons
