import Image from 'next/image'
import Link from 'next/link'

export default function Blog(props) {
  const baseURL = 'https://cms.bvpk.org'
  const assetURL = `${baseURL}/assets/`
  const page = props.props.page
  const unsortedItems = props.props.items
  const sortedItems = unsortedItems.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  return (
    <div className="relative max-w-7xl mx-auto">
      <h2 className="text-4xl tracking-tight font-titillium font-bold text-gray-700">
        {page.title ? page.title : 'Aktuelles vom Bundesverband'}
      </h2>
      <p className="mt-2 max-w-2xl font-source text-lg text-gray-600 mt-4">
        {page.subtitle ||
          'Hier bekommst du die neuesten Infos zum Bundesverband'}
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
        {sortedItems.map((a) => (
          <Link href={/aktuelles/ + a.slug} key={a.title}>
            <a className="flex flex-col rounded-md shadow-md transition transform hover:shadow-xl duration-500 overflow-hidden">
              <div className="flex-shrink-0">
                <div className="relative row h-48 w-full">
                  <Image
                    className="object-cover rounded-none"
                    src={assetURL + a.image}
                    layout="fill"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-between hover:shadow-xl">
                <div className="flex-1">
                  <p className="uppercase tracking-wide font-source font-bold text-bvpk-800">
                    {a.category}
                  </p>
                  <div className="block mt-2">
                    <p className="text-lg font-bold font-titillium text-gray-600">
                      {a.title}
                    </p>
                    <p className="mt-3 text-base text-sm font-source text-gray-500">
                      {a.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex space-x-1 text-sm font-source text-gray-400">
                      <time dateTime={a.datetime}>
                        {new Intl.DateTimeFormat('de-DE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }).format(new Date(a.date))}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
