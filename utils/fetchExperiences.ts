import { Experience } from "../typings";
import { server } from "./urlConfig"

export const fetchExperiences = async() => {
    const res = await fetch(`${server}/api/getExperiences`)

    const data = await res.json()
    const experiences:Experience[] = data.experiences

    // console.log('fetching experiences', experiences)

    return experiences
}