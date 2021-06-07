import NavBar from '../../components/navbar.js'
import { getAllPosts, getPost } from '../../lib/api'
import { CameraIcon } from '@heroicons/react/solid'
import ReactMarkdown from 'react-markdown'

export default function Post(props) {
  const API_ASSET_URL = 'https://directus-project.sehn.dev/assets/'
  // process.env.NODE_ENV === 'production'
  //   ? process.env.DIRECTUS_URL + '/assets/'
  //   : 'http://localhost:8055/assets/'
  return (
    <>
      <NavBar />
      <div className="pt-12 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Blog
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {props.title}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={API_ASSET_URL + props.image}
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">Photograph by Marcus O’Leary</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose text-base max-w-prose mx-auto lg:max-w-none">
                <ReactMarkdown>{props.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug)

  return {
    props: { ...data[0] },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()
  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}