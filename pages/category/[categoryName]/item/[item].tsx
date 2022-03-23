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

function ItemCardPage() {
    const router = useRouter()
    const {query} = router
    const categoryName = query?.category
    const item = tnvd_data[0]
    console.log(query)

    return (
        <main className={'item-list-page-container'}>
            <Head>
                <meta name="yandex-verification" content="4f4c25a806e74627"/>
                <title>Список товаров в категории {categoryName}</title>
                <meta
                    name="description"
                    content="Страница товара."
                />
            </Head>
            <Header/>
            <div className={style.container}>
                <div key={item.name} className={style.itemCard}>
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
                            <SwiperSlide><img className={style.swiperImg} src={item?.img || defaultImg}/></SwiperSlide>
                            <SwiperSlide><img className={style.swiperImg} src={item?.img || defaultImg}/></SwiperSlide>

                        </Swiper>
                    </div>
                    <div className={style.infoContainer}>
                        <div className={style.price}>{formatNumber(item.price)} ₽</div>
                        <div className={style.like}>
                           <Image height={30} width={30} src={heart}/>
                        </div>
                        <div className={style.btnBuy}>Купить</div>
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
        </main>
    )
}

export default ItemCardPage
