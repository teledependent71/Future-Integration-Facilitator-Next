import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  const urlParams = {
    'pagination[limit]': 10,
    'pagination[start]': 0,
    populate: '*',
  }
  const data = await fetch(
    `${process.env.CMS_URL}/api/Authors?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return normalize(response)
}
