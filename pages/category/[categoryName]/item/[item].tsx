import {useRouter} from 'next/router'
import Head from "next/head";
import {Header} from "../../../../components/header/header";
import style from '../../../../styles/itemPage.module.css'
import {defaultImg} from "../../../../consts/consts";
import {formatNumber} from "../../../../tools/format-number";
import {tnvd_data} from "../../../../data/tnvd";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
import heart from '/public/img/heart.svg'
import Image from 'next/image'
import {useEffect, useState} from "react";
import {getDataCategory} from "../../../../data/getDataCategory";
import {ModalBuyItem} from "../../../../components/modalBuyItem";
import { getPrevHref } from '../../../../tools/getPrevHref';

function ItemCardPage() {
    const router = useRouter()
    const {query} = router
    const {item: itemName,categoryName = ''} = query
    const [item,setItem] = useState<any>()
    const [isOpenBuyModal, setOpenBuyModal] = useState(false)
    const prevHref = getPrevHref(router)
    useEffect(()=>{
        const defaultData = getDataCategory(categoryName)
         setItem(defaultData.find((item)=>item.name === itemName))
    },[itemName])

    const handleOpenBuyModal = () => setOpenBuyModal(true)

    return (
        <main className={'item-list-page-container'}>
            <Head>
                <meta name="yandex-verification" content="4f4c25a806e74627"/>
                <title>{`Купить Видеокарта ${item?.name || ''} в интернет магазине Дизель Маркет. Характеристики, цена ${item?.name || ''}`}</title>
                <meta
                    name="description"
                    content={`Купить с гарантией качества ${item?.name || ''} в магазине Дизель Маркет. Выгодные цены на ${item?.name || ''} в сети магазинов Дизель Маркет. Доставка по всей России.`}
                />
            </Head>
            <Header prevHref={prevHref}/>
            {item &&
            <div className={style.container}>
                <div key={item?.name} className={style.itemCard}>
                    <div className={style.swiperContainer}>
                        <Swiper
                            pagination={{
                                type: "fraction",
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img className={style.swiperImg} src={item?.img || defaultImg}/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={style.infoContainer}>
                        <div className={style.price}>{formatNumber(item.price)} ₽</div>
                        <div className={style.like}>
                           <Image height={30} width={30} src={heart}/>
                        </div>
                        <div onClick={handleOpenBuyModal} className={style.btnBuy}>Купить</div>
                        <div className={style.otherInfoContainer}>
                            <div className={style.widgetInfo}>
                                <div>Быстрая доставка:</div>
                                <div className={style.widgetValue}>Есть</div>
                            </div>
                            <div className={style.widgetInfo}>
                                <div>Оптовые скидки:</div>
                                <div className={style.widgetValue}>Есть</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <ModalBuyItem isOpen={isOpenBuyModal} handleClose={() => setOpenBuyModal(false)}/>
        </main>
    )
}

export default ItemCardPage
