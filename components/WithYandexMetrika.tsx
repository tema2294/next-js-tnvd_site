import React, { ReactNode, useCallback, useEffect } from 'react'
import Router from 'next/router'
import ym, { YMInitializer } from 'react-yandex-metrika'

export type WithYandexMetrikaProps = {
    children: ReactNode
}

const YANDEX_METRIKA_ID = 88163780
const enabled =
    process.env.NODE_ENV === 'production' && YANDEX_METRIKA_ID

const WithYandexMetrika = (props: WithYandexMetrikaProps) => {
    const { children } = props

    const hit = useCallback((url) => {
        if (enabled) {
            ym('hit', url)
        } else {
            console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url)
        }
    }, [])

    useEffect(() => {
        hit(window.location.pathname + window.location.search)
        Router.events.on('routeChangeComplete', (url: string) => hit(url))
    }, [])

    return (
        <>
            {enabled && (
            <YMInitializer
                accounts={[YANDEX_METRIKA_ID]}
    options={{ webvisor: true, defer: true }}
    version="2"
        />
)}
    {children}
    </>
)
}

export default WithYandexMetrika