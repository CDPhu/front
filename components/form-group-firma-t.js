import Input from '../components/input'
import Checkbox from '../components/checkbox'

export default function FormGroupTaetigkeit() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Tätigkeitsschwerpunkte
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Was ist der Fokus Deines Betriebes?
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                <div className="grid grid-cols-6 gap-3">
                  {/* GF */}
                  <div className="col-span-6">
                    <Checkbox name="f_t_gf" title="Großfeuerwerk" />
                  </div>
                  {/* Bühne */}
                  <div className="col-span-6">
                    <Checkbox name="f_t_buehne" title="Bühne" />
                  </div>
                  {/* SFX */}
                  <div className="col-span-6">
                    <Checkbox name="f_t_sfx" title="SFX" />
                  </div>
                  {/* Handel mit GF */}
                  <div className="col-span-6">
                    <Checkbox
                      name="f_t_handel_gf"
                      title="Handel mit Großfeuerwerk"
                    />
                  </div>
                  {/* Handel mit Kleinfeuerwerk zu Silvester */}
                  <div className="col-span-6">
                    <Checkbox
                      name="f_t_handel_kf_silvester"
                      title="Handel mit Kleinfeuerwerk zu Silvester"
                    />
                  </div>
                  {/* Handel mit Kleinfeuerwerk unter dem Jahr */}
                  <div className="col-span-6">
                    <Checkbox
                      name="f_t_handel_kf"
                      title="Handel mit Kleinfeuerwerk unter dem Jahr"
                    />
                  </div>
                  {/* Import */}
                  <div className="col-span-6">
                    <Checkbox name="f_t_import" title="Import" />
                  </div>
                  {/* Herstellung in Deutschland */}
                  <div className="col-span-6">
                    <Checkbox
                      name="f_t_herstellung_de"
                      title="Herstellung in Deutschland"
                    />
                  </div>
                  <div className="col-span-6">
                    <Input
                      type="text"
                      name="f_t_sonstige"
                      title="Sonstiges"
                      msg="max. 35 Zeichen"
                      validation={{
                        maxLength: 35,
                      }}
                    />
                  </div>
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
