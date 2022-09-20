import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

    const data = await res.json()
    console.log('fetching pageInfo data', data)

    const pageInfo:PageInfo = data.pageInfo

    // console.log('fetching pageInfo', pageInfo)

    return pageInfo
}