import Checkbox from '../components/checkbox'
import { useFormContext } from 'react-hook-form'

export default function FormGroupMitgliedFeuerwerk() {
  const { watch } = useFormContext()
  const hasPermission = watch('feuerwerk_erlaubnis')
  const para7 = watch('feuerwerk_para_7')
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Feuerwerk
              </h3>
              {/* <p className="mt-1 text-md font-source text-gray-400"> */}
              {/* </p> */}
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Checkbox
                      name="feuerwerk_erlaubnis"
                      title="Ich verfüge über einen Erlaubnis- oder Befähigungsschein (nicht notwendig, um Mitglied zu werden)."
                    />
                  </div>
                  {hasPermission && (
                    <>
                      <div className="ml-4 col-span-6">
                        <Checkbox name="feuerwerk_para_20" title="§20" />
                      </div>
                      <div className="ml-4 col-span-6">
                        <Checkbox name="feuerwerk_para_27" title="§27" />
                      </div>
                      <div className="ml-4 col-span-6">
                        <Checkbox name="feuerwerk_para_7" title="§7" />
                      </div>
                      {para7 && (
                        <div className="font-source font-bold text-gray-700 ml-4 -mt-4 col-span-6">
                          Du betreibst Pyrotechnik auch gewerblich? Dann nutze
                          bitte{' '}
                          <a
                            className="text-gray-700 underline decoration-bvpk-300 hover:decoration-2"
                            target="_blank"
                            href="/mitglied-werden-firma"
                          >
                            das Beitrittsformular für Firmenmitglieder
                          </a>{' '}
                        </div>
                      )}
                      <div className="text-gray-700 font-source font-bold ml-4 col-span-6">
                        Mein Erlaubnisschein bezieht sich auf die Bereiche:
                      </div>
                      <div className="ml-4 col-span-6">
                        <Checkbox name="feuerwerk_f3" title="F3" />
                      </div>
                      <div className="ml-4 col-span-6">
                        <Checkbox
                          name="feuerwerk_buehne"
                          title="Bühnenpyrotechnik"
                        />
                      </div>
                      <div className="ml-4 col-span-6">
                        <Checkbox name="feuerwerk_gf" title="Großfeuerwerk" />
                      </div>
                      <div className="ml-4 col-span-6">
                        <Checkbox name="feuerwerk_sfx" title="SFX" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </>
  )
}
