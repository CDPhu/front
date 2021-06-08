const API_URL = process.env.DIRECTUS_URL

async function fetchAPI(query) {
  console.log(query)

  const res = await fetch(API_URL + query)
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPosts() {
  const data = await fetchAPI('/items/posts')
  return data
}

export async function getPost(slug) {
  const data = await fetchAPI('/items/posts/?filter[slug][_eq]=' + slug)
  return data
}

export async function getFirst30Posts() {
  const data = await fetchAPI('/items/posts?limit=30')
  return data
}
