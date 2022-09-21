import { PageInfo } from "../typings";
import { server } from "./urlConfig"

export const fetchPageInfo = async() => {
    const res = await fetch(`${server}/api/getPageInfo`)

    const data = await res.json()

    const pageInfo:PageInfo = data.pageInfo

    // console.log('fetching pageInfo', pageInfo)

    return pageInfo
}