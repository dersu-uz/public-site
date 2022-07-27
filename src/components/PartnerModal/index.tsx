import { FC } from 'react'
import Modal from 'react-modal';

type Props = {
    isOpen: boolean
    onClose: () => void
    partnerImageSource: string
    partnerImageAltText: string
    partnerName: string
    hasLinks: boolean
    aboutPartner: string
    aboutPartnerDetails: string
    howWeCollaborate: string
    collaborationDetails: string
}

const PartnerModal: FC<Props> = ({
    isOpen,
    onClose,
    partnerImageSource,
    partnerImageAltText,
    partnerName,
    hasLinks,
    aboutPartner,
    aboutPartnerDetails,
    howWeCollaborate,
    collaborationDetails,
    children
}) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="More info on AEGM"
        style={{
          overlay: {
            backgroundColor: 'rgba(49, 49, 49, 0.45)'
          },
          content: {
            top: 100,
            bottom: 100,
            left: 30,
            right: 30,
            borderRadius: '10px'
          }
        }}
      >
        <div className='flex justify-end'>
          <button onClick={onClose}>
            <img src="/images/common/icon-cancel-dark.svg" alt="cancel-icon" />
          </button>
        </div>
        <div className='sm:px-8 py-3'>
          {/* The Image, title and links */}
          <div className='text-center md:flex md:space-x-10 items-center'>
            <div className='flex justify-center'>
              <img src={partnerImageSource} alt={partnerImageAltText} />
            </div>
            <div className='mt-3 sm:mt-0'>
              <div>
                <p className='text-3xl font-semibold md:text-4xl md:text-left sm:font-normal text-center'>{partnerName}</p>
              </div>
              {hasLinks && (
                children
              )}
            </div>
          </div>

          {/* The Content */}
          <div className='grid md:grid-cols-2 mt-8 sm:mt-12 px-3 md:gap-x-10 lg:gap-x-40 gap-y-7'>
            <div>
              <p className='text-3xl font-semibold sm:text-2xl mb-5 sm:font-normal text-center sm:text-left'>
                {aboutPartner}
              </p>
              <p className='text-center sm:text-justify font-sans'>{aboutPartnerDetails}</p>
            </div>
            <div>
              <p className='text-3xl font-semibold sm:text-2xl mb-5 sm:font-normal text-center sm:text-left'>
                  {howWeCollaborate}
              </p>
              <p className='text-center sm:text-justify font-sans'>{collaborationDetails}</p>
            </div>
          </div>
        </div>
      </Modal>
)

export default PartnerModal
