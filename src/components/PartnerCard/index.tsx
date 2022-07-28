import { FC, ReactElement } from 'react'

type Props = {
    isLinkedCard: boolean
    hasChildren?: boolean
    imageSource: string
    imageAltText: string
    moreInfo?: boolean
    seeMoreInfo?: string
    partnerDescription?: ReactElement
    linkUrl?: string
    linkTarget?: string
    linkRel?: string
    onClick?: () => void
}

const PartnerCard: FC<Props> = ({
    isLinkedCard,
    hasChildren,
    imageSource,
    imageAltText,
    onClick,
    partnerDescription,
    moreInfo,
    seeMoreInfo,
    linkUrl,
    linkTarget,
    linkRel,
    children
}) => (
    hasChildren ? 
        <div>
            {children}
        </div> :
        isLinkedCard ? 
            <a
                href={linkUrl}
                target={linkTarget}
                rel={linkRel}
                onClick={onClick}
                className="bg-white rounded-lg flex flex-col px-8 border-transparent border-4 hoverable:hover:border-dersu-blue"
            >
                {moreInfo === true && (
                    <div>
                        <p className="h-[210px] flex justify-center items-center">
                            <img
                                src={imageSource}
                                alt={imageAltText}
                            />
                        </p>
                        <p className="text-center sm:text-left font-sans text-sm py-0.5">{partnerDescription}</p>
                        <div className='border-black/20 border-t flex justify-center items-center'>
                            <div className='flex my-5 space-x-1'>
                                <img src="/images/common/icon-more.svg" alt="See more icon" />
                                <p>{seeMoreInfo}</p>
                            </div>
                        </div>
                    </div>
                )}
                {moreInfo === false && (
                    <div>
                        <p className="border-black/20 border-b h-[210px] flex justify-center items-center">
                            <img
                                src={imageSource}
                                alt={imageAltText}
                            />
                        </p>
                        {partnerDescription}
                    </div>
                )}
            </a> :
            <div className="cursor-pointer bg-white rounded-lg flex flex-col px-8 border-transparent border-4 hoverable:hover:border-dersu-blue" onClick={onClick}>
                {moreInfo === true && (
                    <div>
                        <p className="h-[210px] flex justify-center items-center">
                            <img
                                src={imageSource}
                                alt={imageAltText}
                            />
                        </p>
                        <p className="text-center sm:text-left font-sans text-sm py-0.5">{partnerDescription}</p>
                        <div className='border-black/20 border-t flex justify-center items-center'>
                            <div className='flex my-5 space-x-1'>
                                <img src="/images/common/icon-more.svg" alt="See more icon" />
                                <p>{seeMoreInfo}</p>
                            </div>
                        </div>
                    </div>
                )}
                {moreInfo === false && (
                    <div>
                        <p className="border-black/20 border-b h-[210px] flex justify-center items-center">
                            <img
                                src={imageSource}
                                alt={imageAltText}
                            />
                        </p>
                        <p className="font-sans text-sm py-7">{partnerDescription}</p>
                    </div>
                )}
        </div>
)

PartnerCard.defaultProps = {
    hasChildren: false,
    moreInfo: false
  }

export default PartnerCard
