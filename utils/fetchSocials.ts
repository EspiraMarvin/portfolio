import { Social } from "../typings";
import { server } from "./urlConfig"

export const fetchSocials = async() => {
    const res = await fetch(`${server}/api/getSocials`)

    const data = await res.json()
    const socials:Social[] = data.socials

    // console.log('fetching socials', socials)

    return socials
}