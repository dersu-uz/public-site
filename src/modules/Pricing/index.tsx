import { FC, useContext } from 'react'
import Fade from 'react-reveal/Fade'

import Wrapper from '@/components/Wrapper'
import StoreButtons from '@/components/StoreButtons'
import TranslationsContext from '@/contexts/TranslationsContext'

const Pricing: FC = () => {
  const { currentLocale, t } = useContext(TranslationsContext)

  return (
    <div id="plans" className="py-16">
      <Wrapper>
        {/* Header */}
        <h2 className="font-sans font-bold text-dersu-2xs uppercase tracking-widest mb-5 md:text-dersu-xs">
          {t.modulePricing.title}
        </h2>
        <p className="text-dersu-xl mb-7 md:mb-12 max-w-xl md:text-dersu-xl lg:text-dersu-4xl">
          {t.modulePricing.subtitle}
        </p>

        {/* Plans */}
        <Fade bottom cascade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-8 md:mb-16">
            {/* Free plan */}
            <div className="bg-white rounded-3xl px-4 md:px-8 py-7 md:py-11">
              <div className="text-center">
                <h3 className="text-dersu-lg md:mb-3">
                  {t.modulePricing.plans.free.title}
                </h3>
                <p className="text-dersu-3xs font-sans uppercase">
                  {t.modulePricing.plans.free.subtitle}
                </p>
                <p className="text-center">
                  <img
                    src="/images/modules/pricing/plan-1.svg"
                    alt="Illustration"
                    className="inline-block"
                  />
                </p>
                <p className="font-sans text-dersu-2xs text-dersu-light-gray">
                  {t.modulePricing.plans.free.description}
                </p>
              </div>
              <div className="font-sans text-dersu-sm pt-6 mt-6 border-t border-neutral-200">
                <h4 className="font-semibold mb-4">
                  {t.modulePricing.plans.free.whatsIncluded.title}
                </h4>
                <ul className="list-disc list-outside">
                  {t.modulePricing.plans.free.whatsIncluded.features.map(
                    (item, index) => (
                      <li key={index} className="ml-5 mb-1">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* No limits plan */}
            <div className="bg-white rounded-3xl px-4 md:px-8 py-7 md:py-11 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <img
                  src="/images/modules/pricing/discount-shape.svg"
                  alt="Shape"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <p className="absolute w-full h-full flex items-center justify-center text-[30px] font-bold">
                  -50
                  <span className="text-dersu-xs mb-3">%</span>
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-dersu-lg md:mb-3">
                  {t.modulePricing.plans.nolimits.title}
                </h3>
                <p className="text-dersu-3xs font-sans uppercase">
                  {t.modulePricing.plans.nolimits.subtitle}
                </p>
                <p className="text-center">
                  <img
                    src="/images/modules/pricing/plan-2.svg"
                    alt="Illustration"
                    className="inline-block"
                  />
                </p>
                <p className="font-sans text-dersu-2xs text-dersu-light-gray">
                  {t.modulePricing.plans.nolimits.description}
                </p>
              </div>
              <div className="font-sans text-dersu-sm pt-6 mt-6 border-t border-neutral-200">
                <h4 className="font-semibold mb-4">
                  {t.modulePricing.plans.nolimits.whatsIncluded.title}
                </h4>
                <ul className="list-disc list-outside">
                  {t.modulePricing.plans.nolimits.whatsIncluded.features.map(
                    (item, index) => (
                      <li key={index} className="ml-5 mb-1">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Future plans */}
            <div className="bg-dersu-blue rounded-3xl px-4 md:px-8 py-7 md:pt-11 md:pb-7">
              <div className="text-center h-full flex flex-col justify-between">
                <h3 className="text-dersu-lg">
                  {t.modulePricing.plans.futurePlans.title}
                </h3>
                <p className="text-center">
                  <img
                    src="/images/modules/pricing/plan-3.svg"
                    alt="Illustration"
                    className="inline-block"
                  />
                </p>
                <p
                  className="font-sans text-dersu-sm py-6 flex-grow"
                  dangerouslySetInnerHTML={{
                    __html: t.modulePricing.plans.futurePlans.description,
                  }}
                ></p>
                <p>
                  <a
                    href="http://eepurl.com/hI63hX"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="rounded-md font-sans text-sm bg-white/20 flex items-center justify-center py-4 hoverable:hover:bg-black hoverable:hover:text-white"
                  >
                    {t.modulePricing.plans.futurePlans.subscribeButton}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Footer */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-dersu-lg mb-4 text-center md:text-left max-w-sm mx-auto md:mx-0 md:max-w-lg">
              {t.modulePricing.downloadApp}
            </h2>
            <StoreButtons />

            {currentLocale !== 'es' && (
              <p className="font-sans text-xs mt-4 text-center md:text-left max-w-xs mx-auto md:mx-0">
                {t.common.appLocalesDisclaimer}
              </p>
            )}
          </div>
          <div className="md:w-1/2 order-1 md:order-2 border-neutral-200 border-b md:border-l md:border-b-0 pb-8 md:pl-8 flex flex-col md:flex-row gap-1 items-center md:items-start">
            <img
              src="/images/modules/pricing/guide-badge.svg"
              alt="Guide Badge"
            />
            <div className="text-center md:text-left">
              <h2 className="text-dersu-lg mb-1">
                {t.modulePricing.mountainGuideTitle}
              </h2>
              <p className="font-sans text-lg">
                {t.modulePricing.mountainGuideText}
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Pricing
