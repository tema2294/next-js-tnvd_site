import {useRouter} from 'next/router'
import Head from "next/head";
import {Header} from "../../../../components/header/header";
import style from '../../../../styles/itemPage.module.css'
import {defaultImg} from "../../../../consts/consts";
import {formatNumber} from "../../../../tools/format-number";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
import heart from '/public/img/heart.svg'
import Image from 'next/image'
import { useState } from "react";
import {ModalBuyItem} from "../../../../components/modalBuyItem";
import { getPrevHref } from '../../../../tools/getPrevHref';
import {apiHeroku} from "../../../../tools/api";

function ItemCardPage(props:{itemData: any}) {
    const {itemData:item} = props
    const router = useRouter()
    const { name } = item

    const [isOpenBuyModal, setOpenBuyModal] = useState(false)
    const prevHref = getPrevHref(router)

    const handleOpenBuyModal = () => setOpenBuyModal(true)

    return (
        <main className={'item-list-page-container'}>
            <Head>
                <meta name="yandex-verification" content="4f4c25a806e74627"/>
                <title>{`Купить ${name || ''} в интернет магазине Дизель Маркет. Характеристики, цена ${name || ''}`}</title>
                <meta
                    name="description"
                    content={`Купить с гарантией качества ${name || ''} в магазине Дизель Маркет. Выгодные цены на ${name || ''} в сети магазинов Дизель Маркет. Доставка по всей России.`}
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
                            {
                                item.image.length > 0
                                    ?
                                    item.image.map((img:string) => (<SwiperSlide key={img}><img className={style.swiperImg} src={img || defaultImg}/></SwiperSlide>))
                                    : <SwiperSlide><img className={style.swiperImg} src={defaultImg}/></SwiperSlide>
                            }
                        </Swiper>
                    </div>
                    <div className={style.itemNameContainer}>
                        { name }
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
export async function getStaticPaths() {
    const { data } = await apiHeroku.get('items/0')

    const paths = data.map((props:{_id:string,category: string}) => {
        const { _id ,category: categoryName} = props
        return { params: { item: _id ,categoryName} }
    })

    return { paths, fallback: false }
}

export async function getStaticProps(props:{ params:any }) {

    const { item:id } = props.params

    const { data } = await apiHeroku.get(`items/0`)
    const item = data.find((item:any)=> item._id === id )
    return {
        props: {
            itemData: item,
        },
    }
}
export default ItemCardPage
