import { FC, ReactElement } from 'react'

type Props = {
    isLinkedCard: boolean
    hasChildren: boolean
    imageSource: string
    imageAltText: string
    moreInfo: boolean
    partnerDescription?: ReactElement
    linkUrl?: string
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
    children 
}) => (
    hasChildren ? 
        <div>
            {children}
        </div> :
        isLinkedCard ? 
            <a
                href=""
                className="bg-white rounded-lg flex flex-col px-8 hoverable:hover:bg-dersu-blue"
            >
                {moreInfo === true && (
                    <div>
                        <p className="h-[210px] flex justify-center items-center">
                            <img
                                src={imageSource}
                                alt={imageAltText}
                            />
                        </p>
                        <p className="font-sans text-sm py-0.5">{partnerDescription}</p>
                        <div className='border-black/20 border-t flex justify-center items-center'>
                            <p>More Info</p>
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
            </a> :
            <div className="cursor-pointer bg-white rounded-lg flex flex-col px-8 hoverable:hover:bg-dersu-blue" onClick={onClick}>
                {moreInfo === true && (
                    <div>
                        <p className="h-[210px] flex justify-center items-center">
                            <img
                                src={imageSource}
                                alt={imageAltText}
                            />
                        </p>
                        <p className="text-sm py-0.5">{partnerDescription}</p>
                        <div className='border-black/20 border-t flex justify-center items-center'>
                            <div className='flex my-5 space-x-1'>
                                <img src="/images/common/icon-more.svg" alt="See more icon" />
                                <p>More Info</p>
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

export default PartnerCard
