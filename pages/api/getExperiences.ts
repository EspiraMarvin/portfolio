import { sanityClient } from '../../sanity';
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Experience } from '../../typings';

// *[_type == "experience"] | order(_createdAt desc) {

const query = groq`
*[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]-> 
 }
`

type Data = {
experiences: Experience[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const experiences:Experience[] = await sanityClient.fetch(query)
    res.status(200).json({ experiences })
}
