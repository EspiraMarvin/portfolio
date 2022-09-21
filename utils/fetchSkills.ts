import { Skill } from "../typings";
import { server } from "./urlConfig"

export const fetchSkills = async() => {
    const res = await fetch(`${server}/api/getSkills`)

    const data = await res.json()
    const skills:Skill[] = data.skills

    // console.log('fetching skills', skills)

    return skills
}