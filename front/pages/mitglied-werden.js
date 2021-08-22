import parse from 'html-react-parser'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Modal from '../components/modal'
import Footer from '../components/footer'
import FormGroupMitglied from '../components/form-group-mitglied'
import { getMitgliedWerdenPage } from '../lib/api'
import FormGroupMitgliedFeuerwerk from '../components/form-group-mitglied-feuerwerk'
import FormGroupMitgliedVersicherung from '../components/form-group-mitglied-versicherung'
import FormGroupMitgliedFeuerwerkNet from '../components/form-group-mitglied-feuerwerk-net'
import FormGroupMitgliedBeitrag from '../components/form-group-mitglied-beitrag'
import FormGroupMitgliedSEPA from '../components/form-group-mitglied-sepa'
import FormGroupMitgliedConsent from '../components/form-group-mitglied-consent'
import FormGroupMitgliedFreitext from '../components/form-group-mitglied-freitext'

export default function MitgliedWerden(props) {
  // Set needed states
  const [openModal, setOpenModal] = useState(false)
  const [submitErrorMessage, setSubmitErrorMessage] = useState('')

  // Initialise needed form utilities
  const methods = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    methods.formState

  // Send form data to /api/mitglied-werden
  const onSubmit = (data) => {
    axios
      .post('api/mitglied-werden', data)
      .then(setOpenModal(true))
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }

  return (
    <>
      <Head />
      <NavBar />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen bg-purple-900 pt-32 px-4 lg:px-8">
          <div className="prose prose-lg mx-auto prose-on-purple-aktuelles pb-4 md:pb-12">
            {parse(props.dataMitgliedWerdenPage.text)}
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* FormGroups */}
            <FormGroupMitglied />
            <FormGroupMitgliedFeuerwerk />
            <FormGroupMitgliedFeuerwerkNet />
            <FormGroupMitgliedVersicherung />
            <FormGroupMitgliedBeitrag />
            <FormGroupMitgliedSEPA />
            <FormGroupMitgliedFreitext />
            <FormGroupMitgliedConsent />
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
  const dataMitgliedWerdenPage = await getMitgliedWerdenPage()
  return {
    props: {
      dataMitgliedWerdenPage,
    },
    revalidate: 60,
  }
}
