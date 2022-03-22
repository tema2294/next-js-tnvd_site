import {useRouter} from 'next/router'
import Head from "next/head";
import { Header } from "../../../../components/header/header";
import style from '../../../../styles/itemPage.module.css'

function ItemCardPage() {
    const router = useRouter()
    const { query } = router
    const categoryName = query?.category


    return (
        <main className={'item-list-page-container'}>
            <Head>
                <meta name="yandex-verification" content="4f4c25a806e74627" />
                <title>Список товаров в категории {categoryName}</title>
                <meta
                    name="description"
                    content="Страница товара."
                />
            </Head>
            <Header />
            <div className={style.container}>

            </div>
        </main>
    )
}

export default ItemCardPage
