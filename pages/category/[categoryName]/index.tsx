import {useEffect, useState} from "react";
import {ModalBuyItem} from "../../../components/modalBuyItem";
import Link from "next/link";
import {ascSortFunction, descSortFunction} from "../../../tools/sortFuncitons";
import {formatNumber} from "../../../tools/format-number";
import {useRouter} from 'next/router'
import {getDataCategory} from "../../../data/getDataCategory";
import { defaultImg } from "../../../consts/consts";
import Head from "next/head";
import {getDataCategoryMetaName} from "../../../data/getDataCategoryMetaName";
import {Header} from "../../../components/header/header";
import {BurgerCategories} from "../../../components/burderCategories/burgerCategories";

function ItemListPage() {
    const router = useRouter()
    const { query } = router

    const defaultSort = 'Сортировка'
    const asc = 'По возврастанию'
    const desc = 'По убыванию'

    const { categoryName,metaDescription } = getDataCategoryMetaName(query?.categoryName)

    const [sortValue, setSortValue] = useState(defaultSort)
    const [data, setData] = useState<any[]>([])
    const [isOpenSortMenu, setOpenSortMenu] = useState(false)

    const handleSelect = (e: any) => {
        setSortValue(e.target?.innerText)
        setOpenSortMenu((prev) => !prev)
    }

    useEffect(() => {
        const isNeedSort = sortValue !== defaultSort
        if (isNeedSort) {
            const sortFunction = sortValue === asc ? descSortFunction : ascSortFunction
            setData([...data].sort(sortFunction))
        }
    }, [sortValue])
    useEffect(()=>{
        if (categoryName === 'undefined') {
            router.push('/категория-не-найдена')
        }
    },[categoryName])

    useEffect(()=>{
        const {categoryName = ''} = query
        const defaultData = getDataCategory(categoryName)
        setData(defaultData)
    },[query])

    return (
        <main className={'item-list-page-container'}>
            <Head>
                <meta name="yandex-verification" content="4f4c25a806e74627" />
                <title>{categoryName} в магазине Дизель маркет . {categoryName} цены , большой каталог, доставка по всей Росии. Гарантия и низкие цены. Дизель маркет 76. </title>
                <meta
                    name="description"
                    content={metaDescription}
                />
            </Head>
          <Header prevHref={'/'}/>
            <div className="shop-page-category-container">
                <BurgerCategories/>
            </div>
            <div className="item-section">
                <h1>Список товаров в категории {categoryName} :</h1>
                <div className="action-options">
                    <div>
                        <div className="select">
                            <input className="select__input" type="hidden" name=""/>
                            <div onClick={() => setOpenSortMenu((prev) => !prev)}
                                 className={isOpenSortMenu ? "select__head open" : "select__head"}>{sortValue}</div>
                            <ul className={isOpenSortMenu ? "select__list open" : "select__head d-none"}>
                                <li onClick={handleSelect} className="select__item">{asc}</li>
                                <li onClick={handleSelect} className="select__item">{desc}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item-container">
                    {data.map((item: any) =>
                        <div key={item.name} className="item-card">
                            <div className="img-container">
                                <img src={item?.img || defaultImg}/>
                            </div>
                            <div className="info-container">
                                <div className="header-card">
                                    <div className='category-card-name'>{item.name}</div>
                                    <div>{formatNumber(item.price)} руб</div>
                                </div>
                                <div className="info"></div>
                                <div className="action-card-container">
                                    <Link href={`${query?.categoryName}/item/${item?.name}`}>
                                    <div className="btn" >
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                             focusable="false"
                                             aria-hidden="true" viewBox="0 0 24 24" data-testid="AddShoppingCartIcon">
                                            <path
                                                d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
                                        </svg>
                                        купить
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ItemListPage
