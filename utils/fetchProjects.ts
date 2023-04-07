import { Project } from "../typings";
import { server } from "./urlConfig"


export const fetchProjects = async() => {
    const res = await fetch(`${server}/api/getProjects`)

    const data = await res.json()
    const projects:Project[] = data.projects

    // console.log('fetching projects', projects)

    return projects
}