import { NextRouter } from "next/router"

export const getPrevHref = (router: NextRouter):string => {
    const splitPath = router.asPath.split('/')
    const prevHref = splitPath.slice(0,splitPath.length -2).join('/')
    return prevHref
}