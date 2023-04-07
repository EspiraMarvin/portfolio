import { sanityClient } from "./../../sanity"
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

const query = groq`
*[_type == "article"] | order(progress desc)
`

type Data = {
  articles: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const articles: any[] = await sanityClient.fetch(query)
  res.status(200).json({ articles })
}
