import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'
import Head from 'next/head'

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-purple-900">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-titillium font-bold tracking-tight text-purple-300 sm:text-5xl lg:text-6xl">
                Schreibe uns!
              </h1>
              <p className="mt-6 font-source text-xl text-gray-300 max-w-3xl">
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                phasellus morbi non morbi. In elementum urna ut volutpat.
                Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Kontaktformular */}
        <section
          className="relative bg-purple-900"
          aria-labelledby="contactHeading"
        >
          <div className="absolute w-full h-1/2" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-purple-800 shadow-xl rounded-lg">
              <h2 id="contactHeading" className="sr-only">
                Kontaktiere uns
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Kontaktinformationen */}
                <div className="relative rounded-l-lg overflow-hidden py-10 px-6 bg-gradient-to-t from-purple-300 to-purple-600 sm:px-10 xl:p-12">
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  ></div>
                  <h3 className="text-2xl font-source font-bold text-white">
                    Kontatkinformationen
                  </h3>
                  <p className="mt-6 text-base text-gray-300 max-w-3xl">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Telefon</span>
                    </dt>
                    <dd className="flex text-base text-gray-300">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 text-gray-300"
                        aria-hidden="true"
                      />
                      <a href="tel:+49521787999022" className="ml-3">
                        +49 521 787 999 022
                      </a>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-gray-300">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-gray-300"
                        aria-hidden="true"
                      />
                      <a href="mailto:info@bvpk.org" className="ml-3">
                        info@bvpk.org
                      </a>
                    </dd>
                  </dl>
                  <ul className="mt-8 flex space-x-12" role="list">
                    <li>
                      <a
                        className="text-gray-300 hover:text-white"
                        href="https://www.facebook.com/BVPyrotechnik"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-white"
                        href="https://www.instagram.com/bvpyrotechnik"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-white"
                        href="https://twitter.com/bvpyrotechnik"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-2xl font-source font-bold text-gray-300">
                    Sende uns eine Nachricht
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="vorname"
                        className="block text-sm font-source font-bold text-gray-300"
                      >
                        Vorname
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="vorname"
                          id="vorname"
                          autoComplete="given-name"
                          className="py-3 px-4 font-source block w-full formfield"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="nachname"
                        className="block text-sm font-source font-bold text-gray-300"
                      >
                        Nachname
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="nachname"
                          id="nachname"
                          autoComplete="family-name"
                          className="py-3 px-4 font-source block w-full formfield"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-source font-bold text-gray-300"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 font-source block w-full formfield"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="telefonnummer"
                          className="block text-sm font-source font-bold text-gray-300"
                        >
                          Telefonnummer
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm font-source text-gray-300"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="telefonnummer"
                          autoComplete="tel"
                          className="py-3 px-4 font-source block w-full formfield"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="betreff"
                        className="block text-sm font-source font-bold text-gray-300"
                      >
                        Betreff
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="betreff"
                          className="py-3 px-4 font-source block w-full formfield"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="nachricht"
                          className="block text-sm font-source font-bold text-gray-300"
                        >
                          Nachricht
                        </label>
                        <span
                          id="message-max"
                          className="text-sm font-source text-gray-300"
                        >
                          Max. 500 Zeichen
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 font-source block w-full formfield"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full button sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
        <Footer />
      </main>
    </>
  )
}