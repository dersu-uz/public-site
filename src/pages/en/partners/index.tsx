import { useContext, useState } from 'react'
import { GetStaticProps } from 'next'
import { generateRSSFeed } from '@/utils/generateRSSFeed'
import TranslationsContext from '@/contexts/TranslationsContext'
import Wrapper from '@/components/Wrapper'
import PartnerCard from '@/components/PartnerCard'
import Header from '@/components/Header'
import PartnerModal from '@/components/PartnerModal'

export const getStaticProps: GetStaticProps = async () => {
  generateRSSFeed('en')
  return {
    props: {
      locale: 'en',
      title: 'Partners',
      description: '',
    },
  }
}

const Partners = () => {
  const { t } = useContext(TranslationsContext)
  const [aegmModalIsOpen, setAegmModalOpen] = useState(false);
  const [montanaSeguraModalIsOpen, setMontanaSeguraOpen] = useState(false);
  const [immedModalIsOpen, setImmedModalOpen] = useState(false);
  const [altaRutaModalIsOpen, setAltaRutaOpen] = useState(false);

  function openAegmModal() {
    setAegmModalOpen(true);
  }

  function closeAegmModal() {
    setAegmModalOpen(false);
  }

  function openMontanaSeguraModal() {
    setMontanaSeguraOpen(true);
  }

  function closeMontanaSeguraModal() {
    setMontanaSeguraOpen(false);
  }

  function openImmedModal() {
    setImmedModalOpen(true);
  }

  function closeImmedModal() {
    setImmedModalOpen(false);
  }

  function openAltaRutaModal() {
    setAltaRutaOpen(true);
  }

  function closeAltaRutaModal() {
    setAltaRutaOpen(false);
  }

  return (
    <>
      <Header />
      <Wrapper limitedWidth className="pt-10 md:pt-10">
        <h2 className="text-dersu-lg md:text-dersu-4xl mb-5 md:mb-10">
          {t.partners.title}
        </h2>

        <div className='w-full s:w-2/3 lg:w-1/2 text-xl mb-10'>
          <p>
            {t.partners.message}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mb-5 md:mb-10">
          <PartnerCard
            isLinkedCard={false}
            hasChildren={false}
            imageSource={'/images/pages/jornadas-seguridad/logo-aegm.svg'}
            imageAltText={'Logo AEGM'}
            moreInfo={true}
            partnerDescription={
              <p className="font-sans text-sm py-7">
                Te ayuda a <strong>organizar rutas</strong> de senderismo de{' '}
                <strong>alto nivel</strong>, de forma autónoma o con guías
                profesionales
              </p>
            }
            onClick={openAegmModal}
          />

          <PartnerModal
            isOpen={aegmModalIsOpen}
            onClose={closeAegmModal}
            partnerImageSource={"/images/pages/jornadas-seguridad/logo-aegm.svg"}
            partnerImageAltText="Logo AEGM"
            partnerName={`${t.partners.partnerAegm}`}
            hasLinks={true}
            aboutPartner={`${t.partners.aboutPartner} ${t.partners.aegm.abbreviation}`}
            aboutPartnerDetails={`${t.partners.aegm.details}`}
            howWeCollaborate={`${t.partners.howWeCollaborate}`}
            collaborationDetails={`${t.partners.aegm.collaborationDetails}`}
          >
            <div className='grid w-2/3 sm:justify-items-start sm:grid-cols-3 sm:divide-x-2'>
              <a
                href="http://www.aegm.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Website</p>
              </a>
              <div className='sm:px-6'>
                <a
                  href="https://www.facebook.com/aegmguias/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Facebook</p>
                </a>
              </div>
              <div className='sm:px-6'>
                <a
                  href="https://www.instagram.com/Aegm_oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </PartnerModal>

          <PartnerCard
            isLinkedCard={false}
            hasChildren={false}
            imageSource={'/images/pages/jornadas-seguridad/logo-montanasegura.svg'}
            imageAltText={'Logo Montana Segura'}
            moreInfo={true}
            partnerDescription={
              <p className="font-sans text-sm py-7">
                Te ayuda a <strong>organizar rutas</strong> de senderismo de{' '}
                <strong>alto nivel</strong>, de forma autónoma o con guías
                profesionales
              </p>
            }
            onClick={openMontanaSeguraModal}
          />

          <PartnerModal
            isOpen={montanaSeguraModalIsOpen}
            onClose={closeMontanaSeguraModal}
            partnerImageSource={"/images/pages/jornadas-seguridad/logo-montanasegura.svg"}
            partnerImageAltText="Logo Montana Segura"
            partnerName={`${t.partners.partnerMontanaSegura}`}
            hasLinks={true}
            aboutPartner={`${t.partners.aboutPartner} ${t.partners.partnerMontanaSegura}`}
            aboutPartnerDetails={`${t.partners.montanaSegura.details}`}
            howWeCollaborate={`${t.partners.howWeCollaborate}`}
            collaborationDetails={`${t.partners.montanaSegura.collaborationDetails}`}
          >
            <div className='grid sm:justify-items-start sm:grid-cols-3 sm:divide-x-2'>
              <a
                href="https://montanasegura.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Website</p>
              </a>
              <div className='sm:px-6'>
                <a
                  href="https://www.facebook.com/seguridadmontana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Facebook</p>
                </a>
              </div>
              <div className='sm:px-6'>
                <a
                  href="https://www.instagram.com/montanasegurainfo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </PartnerModal>

          <PartnerCard
            isLinkedCard={false}
            hasChildren={false}
            imageSource={'/images/pages/jornadas-seguridad/logo-immed.svg'}
            imageAltText={'Logo Immed'}
            moreInfo={true}
            partnerDescription={
              <p className="font-sans text-sm py-7">
                Te ayuda a <strong>organizar rutas</strong> de senderismo de{' '}
                <strong>alto nivel</strong>, de forma autónoma o con guías
                profesionales
              </p>
            }
            onClick={openImmedModal}
          />

          <PartnerModal
            isOpen={immedModalIsOpen}
            onClose={closeImmedModal}
            partnerImageSource={"/images/pages/jornadas-seguridad/logo-immed.svg"}
            partnerImageAltText="Logo Instituto de Medicina de Montaña y del Deporte"
            partnerName={`${t.partners.partnerImmed}`}
            hasLinks={true}
            aboutPartner={`${t.partners.aboutPartner} ${t.partners.immed.abbreviation}`}
            aboutPartnerDetails={`${t.partners.immed.details}`}
            howWeCollaborate={`${t.partners.howWeCollaborate}`}
            collaborationDetails={`${t.partners.immed.collaborationDetails}`}
          >
            <div className='grid sm:justify-items-start sm:grid-cols-7 sm:divide-x-2'>
              <a
                href="www.immed.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Website</p>
              </a>
              <div className='sm:pl-8'>
                <a
                  href="https://www.facebook.com/IMMED-511545288930539/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Facebook</p>
                </a>
              </div>
            </div>
          </PartnerModal>

          <PartnerCard
            isLinkedCard={false}
            hasChildren={false}
            imageSource={'/images/pages/jornadas-seguridad/logo-altaruta.svg'}
            imageAltText={'Logo Alta Ruta'}
            moreInfo={true}
            partnerDescription={
              <p className="font-sans text-sm py-7">
                Te ayuda a <strong>organizar rutas</strong> de senderismo de{' '}
                <strong>alto nivel</strong>, de forma autónoma o con guías
                profesionales
              </p>
            }
            onClick={openAltaRutaModal}
          />

          <PartnerModal
            isOpen={altaRutaModalIsOpen}
            onClose={closeAltaRutaModal}
            partnerImageSource={"/images/pages/jornadas-seguridad/logo-altaruta.svg"}
            partnerImageAltText="Logo Alta Ruta"
            partnerName={`${t.partners.partnerAltaRuta}`}
            hasLinks={true}
            aboutPartner={`${t.partners.aboutPartner} ${t.partners.partnerAltaRuta}`}
            aboutPartnerDetails={`${t.partners.altaRuta.details}`}
            howWeCollaborate={`${t.partners.howWeCollaborate}`}
            collaborationDetails={`${t.partners.altaRuta.collaborationDetails}`}
          >
            <div className='grid sm:justify-items-start sm:grid-cols-3 sm:divide-x-2'>
              <a
                href="https://www.laaltaruta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Website</p>
              </a>
              <div className='sm:px-6'>
                <a
                  href="https://www.facebook.com/laaltaruta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-center'
                >
                  <p>Facebook</p>
                </a>
              </div>
              <div className='sm:px-6'>
                <a
                  href="https://www.instagram.com/laaltaruta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-center'
                >
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </PartnerModal>
        </div>
      </Wrapper>
    </>
  )
}

export default Partners
