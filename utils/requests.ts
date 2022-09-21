import { server } from "./urlConfig"

const BASE_URL=server

const requests = {
    fetchPageInf: `${BASE_URL}/api/getPageInfo`,
    fetchExp: `${BASE_URL}/api/getExperiences`,
    fetchProj: `${BASE_URL}/api/getProjects`,
    fetchSkil: `${BASE_URL}/api/getSkills`,
    fetchSoci: `${BASE_URL}/api/getSocials`,
}

export default requests