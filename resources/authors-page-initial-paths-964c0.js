export default async function (params = {}) {
  const urlParams = {
    'pagination[pageSize]': 1,
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
  return response
}
