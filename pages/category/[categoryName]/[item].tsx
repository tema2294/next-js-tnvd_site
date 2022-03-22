
import {useRouter} from 'next/router'

import Head from "next/head";
import { Header } from "../../../components/header/header";

function ItemCardPage() {
    const router = useRouter()
    const { query } = router
    console.log(query)
    const categoryName = query?.category


    return (
        <main className={'item-list-page-container'}>
            <Head>
                <meta name="yandex-verification" content="4f4c25a806e74627" />
                <title>Список товаров в категории {categoryName}</title>
                <meta
                    name="description"
                    content="Топливные насосы высокого давления ремонт и продажа. ТНВД - Дизель маркет 76 Ярославль.Распылители , подкачки , плунжерные пары ,ТННД, насосы."
                />
            </Head>
            <Header />

        </main>
    )
}

export default ItemCardPage
