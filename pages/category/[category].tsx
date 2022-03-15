import {useEffect, useState} from "react";
import {ModalBuyItem} from "../../components/modalBuyItem";
import Link from "next/link";
import {ascSortFunction, descSortFunction } from "../../tools/sortFuncitons";
import arrowBack from '../../public/img/arrow-back.svg'

import { formatNumber } from "../../tools/format-number";
import Image from 'next/image'
import { tnvd_data } from "../../data/tnvd";

 function ItemListPage() {
    const initialData = tnvd_data
    const defaultSort = 'Сортировка'
    const asc = 'По возврастанию'
    const desc = 'По убыванию'


    const [sortValue, setSortValue] = useState(defaultSort)
    const [data, setData] = useState(initialData)
    const [isOpenSortMenu, setOpenSortMenu] = useState(false)
    const [isOpenBuyModal,setOpenBuyModal] = useState(false)

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
    const handleOpenBuyModal = ()=> setOpenBuyModal(true)
    return (
        <main className={'item-list-page-container'}>
            <header>
                <nav className="nav-container">
                    <Link href="/">
                        <Image width={20} height={20} src={arrowBack} />
                    </Link>
                    <a>ТНВД 76</a>

                    <a className="nav-info" href="tel:+79066359997">
                        <div className="nav-info_work-time">Пн-Вс 10:00 - 21:00</div>
                        <div className="nav-info_work-number">+ 7 906 635 9997</div>
                    </a>
                </nav>

            </header>
            <div className="item-section">
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
                                <img src={item.img}/>
                            </div>
                            <div className="info-container">
                                <div className="header-card">
                                    <div>{item.name}</div>
                                    <div>{formatNumber(item.price)} руб</div>
                                </div>
                                <div className="info"></div>
                                <div className="action-card-container">
                                    <div className="btn" onClick={handleOpenBuyModal}>
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                             focusable="false"
                                             aria-hidden="true" viewBox="0 0 24 24" data-testid="AddShoppingCartIcon">
                                            <path
                                                d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
                                        </svg>
                                        купить
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ModalBuyItem isOpen={isOpenBuyModal} handleClose={()=>setOpenBuyModal(false)}/>
        </main>
    )
}
export default ItemListPage
