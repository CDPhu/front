import parse from 'html-react-parser'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Head from '../components/head'
import Modal from '../components/modal'
import getFromDirectus from '../lib/directus'
import FormGroupAenderung from '../components/form-group-aenderung'
import FormGroupFirma from '../components/form-group-firma'
import FormGroupFirmaAP from '../components/form-group-firma-ap'
import FormGroupFirmaT from '../components/form-group-firma-t'
import FormGroupFirmaFeuerwerkNet from '../components/form-group-firma-feuerwerk-net'
import FormGroupFirmaBeitrag from '../components/form-group-firma-beitrag'
import FormGroupFirmaSEPA from '../components/form-group-firma-sepa'
import FormGroupFirmaConsent from '../components/form-group-firma-consent'
import FormGroupFirmaFreitext from '../components/form-group-firma-freitext'

export default function MitgliedschaftAendern(props) {
  // Set needed states
  const [openModal, setOpenModal] = useState(false)
  const [submitErrorMessage, setSubmitErrorMessage] = useState('')
  // Initialise needed form utilities
  const methods = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    methods.formState

  const onSubmit = async (data) => {
    return await fetch('/api/mitglied-werden-firma', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          setSubmitErrorMessage(
            'Hier gab es ein Problem! Schreib uns am Besten eine Mail.'
          )
          throw new Error('Hier gab es ein Problem!')
        } else {
          setOpenModal(true)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <NavBar />
      <Head />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen bg-bvpk-900 pt-32 px-4 lg:px-8">
          <div className="prose prose-lg mx-auto prose-on-bvpk-aktuelles pb-4 md:pb-12">
            {parse(props.dataMitgliedschaftAendernPage.text)}
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* FormGroups */}
            <FormGroupAenderung />
            <FormGroupFirma />
            <FormGroupFirmaAP />
            <FormGroupFirmaT />
            <FormGroupFirmaFeuerwerkNet />
            <FormGroupFirmaBeitrag />
            <FormGroupFirmaSEPA />
            <FormGroupFirmaFreitext />
            <FormGroupFirmaConsent />
            {/* Submit */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button
                type="submit"
                className={`${
                  isSubmitSuccessful && !submitErrorMessage
                    ? 'button-success'
                    : 'button'
                }`}
                disabled={
                  !isDirty ||
                  !isValid ||
                  isSubmitting ||
                  (isSubmitSuccessful && !submitErrorMessage)
                }
              >
                {`${
                  isSubmitSuccessful && !submitErrorMessage
                    ? 'Danke für Deine Unterstützung!'
                    : 'Beitreten!'
                }`}
              </button>
            </div>
            {submitErrorMessage && (
              <div className="flex justify-end -mt-3 font-source py-3 text-red-500">
                {submitErrorMessage}
              </div>
            )}
          </form>
        </div>
      </FormProvider>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataMitgliedschaftAendernPage = await getFromDirectus(
    '/items/mitgliedschaft_aendern_page'
  )
  return {
    props: {
      dataMitgliedschaftAendernPage,
    },
    revalidate: 60,
  }
}
